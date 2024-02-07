// DynamoDB utility functions
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

/**
 * Scans the DynamoDB table for the latest posts sorted by UnixTime.
 * @param {DynamoDBClient} client - The DynamoDB client.
 * @param {string} tableName - The name of the DynamoDB table.
 * @param {number} limit - The maximum number of items to return.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of items.
 */
async function getLatestPosts(client, tableName, limit = 10) {
    const command = new ScanCommand({
        TableName: tableName,
        FilterExpression: "attribute_exists(UnixTime)",
        Limit: limit,
    });

    try {
        const { Items } = await client.send(command);
        // Sorting by UnixTime in descending order
        Items.sort((a, b) => b.UnixTime.N - a.UnixTime.N);
        return Items.map(item => unmarshall(item));
    } catch (error) {
        console.error("Error fetching latest posts: ", error);
        return [];
    }
}

module.exports.getLatestPosts = getLatestPosts;
