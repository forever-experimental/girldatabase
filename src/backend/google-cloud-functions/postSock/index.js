const functions = require('@google-cloud/functions-framework');
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');
const {DynamoDBClient, PutItemCommand} = require('@aws-sdk/client-dynamodb');
const sharp = require('sharp');
const crypto = require('crypto');
const dotenv = require('dotenv');
const cors = require('cors')({ origin: true });
const {getLastExtension} = require('uriurl');

dotenv.config();

const s3Client = new S3Client({
    endpoint: process.env.CLOUDFLARE_ENDPOINT,
    region: 'auto',
    credentials: {
        accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
        secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY
    },
    signatureVersion: 'v4',
    forcePathStyle: true
});

const dynamoDBClient = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const FILE_SIZE_LIMIT = 3 * 1024 * 1024; // 3 MB size limit
const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE;

functions.http('postSock', async (req, res) =>
{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    cors(req, res, async () =>
    {
        const {dir, fileName, imageContent, text} = req.body; /////////////////////////////////////////////////////////////////
        const bucketName = process.env.R2_BUCKET_NAME;
        if (!bucketName || !DYNAMODB_TABLE)
        {
            res.status(500).send('必要な設定が欠けています。(Required configurations are missing.)');
            return;
        }

        if (!fileName || !imageContent)
        {
            res.status(400).send('画像名と画像内容を提供してください。(Please provide both image name and image content.)');
            return;
        }
        if (!['.webp', '.avif'].includes(`.${getLastExtension(fileName)}`))
        {

            res.status(400).send('画像拡張子はWebPまたはAVIFのみです。(Image extension must be WebP or AVIF only.)');
            return;
        }

        const buffer = Buffer.from(imageContent, 'base64');
        if (buffer.length > FILE_SIZE_LIMIT)
        {
            res.status(400).send('画像のサイズは3MBを超えてはなりません。(Image size must not exceed 3MB.)');
            return;
        }

        try
        {
            const processedBuffer = await sharp(buffer)
            .withMetadata({exif: {}})
            .toBuffer();
            const hashName = crypto.randomBytes(6).toString('hex') + `.${getLastExtension(fileName)}`;

            const metadata = {
                unixTime: Math.floor(Date.now() / 1000).toString(),
                ip: req.ip,
                bytes: buffer.length.toString(),
                userAgent: req.get('User-Agent'),
                originalFileName: fileName,
                hash: hashName
            };

            await s3Client.send(new PutObjectCommand({
                Bucket: bucketName,
                Key: hashName,
                Body: processedBuffer,
                Metadata: metadata
            }));

            const item = {
                TableName: DYNAMODB_TABLE,
                Item: {
                    'dir': {S: dir},
                    'unix': {N: metadata.unixTime},
                    'comments': {L: []},
                    'imgURL': {S: `https://media.girlsock.directory/${bucketName}/${hashName}`},
                    'hash': {S: hashName},
                    'text': {S: text || ""},
                    'ogfilename': {S: metadata.originalFileName}
                }
            };

            await dynamoDBClient.send(new PutItemCommand(item));


            res.status(200).send('画像は成功裏にアップロードされました。(Image uploaded successfully.)');
        }
        catch (error)
        {
            console.error(`R2へのアップロード中にエラーが発生しました: ${error}\nStack Trace: ${error.stack}`);
            res.status(500).send(`R2へのアップロード中にエラーが発生しました: ${error.message}`);
        }
    });
});