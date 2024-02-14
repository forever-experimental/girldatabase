// DynamoDB utility functions
import {DynamoDBClient, ScanCommand, QueryCommand} from "@aws-sdk/client-dynamodb";
import {unmarshall} from "@aws-sdk/util-dynamodb";


async function fetchPostsFromBoard(tableName, dynamoDBClient, theDirectoryWeWant, limit = 5, startAfterPostId = null,)
{
    theDirectoryWeWant = `/${theDirectoryWeWant}/`;
    try
    {
        const params = {
            TableName: tableName, // Replace with your DynamoDB table name
            KeyConditionExpression: "#pk = :boardId", ExpressionAttributeNames: {
                "#pk": "dir",
            }, ExpressionAttributeValues: {
                ":boardId": {S: theDirectoryWeWant},
            }, ScanIndexForward: false, // Set to false to get the newest posts first
            Limit: limit,
        };
        // If starting after a specific post, include the ExclusiveStartKey in the query
        if (startAfterPostId)
        {
            params.ExclusiveStartKey = {
                "dir": {S: theDirectoryWeWant}, "unix": {S: startAfterPostId},
            };
        }
        const command = new QueryCommand(params);
        const {Items, LastEvaluatedKey} = await dynamoDBClient.send(command);
        // Process and return the fetched items, along with the last evaluated key for pagination
        const processedItems = Items.map(item => ({
            theDir: item.dir.S,
            imageUrl: item.imgURL?.S || "",
            comments: item.comments?.S || "",
            theFileName: item.ogfilename?.S || "",
            theText: item.text?.S || "",
            theUnix: item.unix.N || "",
        }));
        return {
            items: processedItems, lastEvaluatedKey: LastEvaluatedKey ? LastEvaluatedKey.unix.S : null,
        };
    }
    catch (error)
    {
        console.error("Error fetching posts:", error);
        throw new Error("Failed to fetch posts");
    }
}


// async function getLatestPosts(client, tableName, limit = 10)
// {
//     const command = new ScanCommand({
//         TableName: tableName, FilterExpression: "attribute_exists(UnixTime)", Limit: limit,
//     });
//
//     try
//     {
//         const {Items} = await client.send(command);
//         // Sorting by UnixTime in descending order
//         Items.sort((a, b) => b.UnixTime.N - a.UnixTime.N);
//         return Items.map(item => unmarshall(item));
//     }
//     catch (error)
//     {
//         console.error("Error fetching latest posts: ", error);
//         return [];
//     }
// }

module.exports = fetchPostsFromBoard;
