const functions = require('@google-cloud/functions-framework');
const { DynamoDBClient, UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const dotenv = require('dotenv');
const cors = require('cors')({ origin: true });

dotenv.config();

const dynamoDBClient = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

functions.http('dislikeSock', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    cors(req, res, async () =>
    {
        const { postId, unixTime } = req.body;

        if (!postId || !unixTime) {
            res.status(400).send('Please specify both the post ID and the unix time.');
            return;
        }

        try {
            const updateItemCommand = new UpdateItemCommand({
                TableName: process.env.DYNAMODB_TABLE,
                Key: { 'PostID': { S: postId }, 'UnixTime': { N: String(unixTime) } },
                ExpressionAttributeNames: { '#D': 'Dislikes' },
                ExpressionAttributeValues: { ':inc': { N: '1' }, ':zero': { N: '0' } },
                UpdateExpression: 'SET #D = if_not_exists(#D, :zero) + :inc',
                ReturnValues: 'UPDATED_NEW'
            });

            const result = await dynamoDBClient.send(updateItemCommand);

            res.status(200).send('Post downvoted successfully.');
        } catch (error) {
            console.error(`Error during downvote: ${error}\nStack Trace: ${error.stack}`);
            res.status(500).send(`Error during downvote: ${error.message}`);
        }
    });

});
