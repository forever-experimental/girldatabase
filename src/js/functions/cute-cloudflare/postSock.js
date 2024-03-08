import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import sharp from 'sharp';
import crypto from 'crypto';
import { getLastExtension } from 'cute-util';

const FILE_SIZE_LIMIT = 3 * 1024 * 1024; // 3 MB size limit
const DYNAMODB_TABLE = env.DYNAMODB_TABLE;
const ALLOWED_ORIGINS = env.ALLOWED_ORIGINS.split(',');
const CORS_PASS = env.CORS_PASS;
const RATE_LIMIT_MAX_REQUESTS = parseInt(env.RATE_LIMIT_MAX_REQUESTS, 10);
const RATE_LIMIT_TIME_WINDOW = parseInt(env.RATE_LIMIT_TIME_WINDOW, 10);

const s3Client = new S3Client({
  endpoint: env.CLOUDFLARE_ENDPOINT,
  region: 'auto',
  credentials: {
    accessKeyId: env.CLOUDFLARE_ACCESS_KEY_ID,
    secretAccessKey: env.CLOUDFLARE_SECRET_ACCESS_KEY,
  },
  signatureVersion: 'v4',
  forcePathStyle: true,
});

const dynamoDBClient = new DynamoDBClient({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

export default {
  async fetch(request) {
    const requestOrigin = request.headers.get('Origin');
    const corsPass = request.headers.get('X-CORS-Pass');

    if (request.method === 'OPTIONS') {
      if (ALLOWED_ORIGINS.includes(requestOrigin) || corsPass === CORS_PASS) {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Origin': requestOrigin,
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type, X-CORS-Pass',
          },
        });
      } else {
        return new Response(null, { status: 403 });
      }
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    if (!ALLOWED_ORIGINS.includes(requestOrigin) && corsPass !== CORS_PASS) {
      return new Response('Forbidden', { status: 403 });
    }

    const { dir, fileName, imageContent, text } = await request.json();

    const bucketName = env.R2_BUCKET_NAME;

    if (!bucketName || !DYNAMODB_TABLE) {
      return new Response('必要な設定が欠けています。(Required configurations are missing.)', { status: 500 });
    }

    if (!fileName || !imageContent) {
      return new Response('画像名と画像内容を提供してください。(Please provide both image name and image content.)', { status: 400 });
    }

    if (!['.webp', '.avif'].includes(`.${getLastExtension(fileName)}`)) {
      return new Response('画像拡張子はWebPまたはAVIFのみです。(Image extension must be WebP or AVIF only.)', { status: 400 });
    }

    const buffer = Buffer.from(imageContent, 'base64');

    if (buffer.length > FILE_SIZE_LIMIT) {
      return new Response('画像のサイズは3MBを超えてはなりません。(Image size must not exceed 3MB.)', { status: 400 });
    }

    const clientIP = request.headers.get('CF-Connecting-IP');

    // Check if the client IP has exceeded the rate limit
    const rateLimitKey = `ratelimit:${clientIP}`;
    let rateLimitData = await env.RATE_LIMIT_KV.get(rateLimitKey, { type: 'json' });

    if (!rateLimitData) {
      rateLimitData = {
        count: 1,
        expiry: Date.now() + RATE_LIMIT_TIME_WINDOW * 1000,
      };
    } else {
      rateLimitData.count++;
    }

    if (rateLimitData.count > RATE_LIMIT_MAX_REQUESTS) {
      return new Response('Rate limit exceeded', { status: 429 });
    }

    await env.RATE_LIMIT_KV.put(rateLimitKey, JSON.stringify(rateLimitData), {
      expiration: Math.ceil(rateLimitData.expiry / 1000),
    });

    try {
      const processedBuffer = await sharp(buffer).withMetadata({ exif: {} }).toBuffer();
      const hashName = crypto.randomBytes(6).toString('hex') + `.${getLastExtension(fileName)}`;

      const metadata = {
        unixTime: Math.floor(Date.now() / 1000).toString(),
        ip: clientIP,
        bytes: buffer.length.toString(),
        userAgent: request.headers.get('User-Agent'),
        originalFileName: fileName,
        hash: hashName,
      };

      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: hashName,
          Body: processedBuffer,
          Metadata: metadata,
        })
      );

      const item = {
        TableName: DYNAMODB_TABLE,
        Item: {
          dir: { S: dir },
          unix: { N: metadata.unixTime },
          comments: { L: [] },
          imgURL: { S: `https://media.girlsock.directory/${bucketName}/${hashName}` },
          hash: { S: hashName },
          text: { S: text || '' },
          ogfilename: { S: metadata.originalFileName },
        },
      };

      await dynamoDBClient.send(new PutItemCommand(item));

      return new Response('画像は成功裏にアップロードされました。(Image uploaded successfully.)', {
        headers: {
          'Access-Control-Allow-Origin': requestOrigin,
          'Access-Control-Allow-Methods': 'GET, POST',
          'Access-Control-Allow-Headers': 'Content-Type, X-CORS-Pass',
        },
      });
    } catch (error) {
      console.error(`R2へのアップロード中にエラーが発生しました: ${error}\nStack Trace: ${error.stack}`);
      return new Response(`R2へのアップロード中にエラーが発生しました: ${error.message}`, { status: 500 });
    }
  },
};
