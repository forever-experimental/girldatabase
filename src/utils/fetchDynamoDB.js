// DynamoDB utility functions
import {QueryCommand} from "@aws-sdk/client-dynamodb";
//import {_} from 'https://cdn.jsdelivr.net/npm/cute-con';

export async function fetchPostsFromBoard(tableName, dynamoDBClient, theDirectoryWeWant, limit = 5, startAfterPostId = null,) {
    try {
        const params = {
            TableName: tableName, // Replace with your DynamoDB table name
            KeyConditionExpression: "#pk = :boardId", ExpressionAttributeNames: {
                "#pk": "dir",
            }, ExpressionAttributeValues: {
                ":boardId": {S: theDirectoryWeWant},
            }, ScanIndexForward: false, // Set to false to get the newest posts first
            Limit: limit,
        };

        if (startAfterPostId) // If starting after a specific post, include the ExclusiveStartKey in the query
        {
            params.ExclusiveStartKey = {
                "dir": {S: theDirectoryWeWant}, "unix": {S: startAfterPostId},
            };
        }
        const command = new QueryCommand(params);
        const {Items, LastEvaluatedKey} = await dynamoDBClient.send(command);
        // Process and return the fetched items, along with the last evaluated key for pagination
        let processedItems = [];
        for (let i = 0; i < Items.length; i++) {
            if (Items[i].JSON) {
                const fromJson = JSON.parse(Items[i].JSON.S);
                processedItems[i] = {
                    dir: fromJson.dir.S,
                    imgURL: fromJson.imgURL || "",
                    comments: fromJson.comments || "",
                    ogfilename: fromJson.ogfilename || "",
                    text: fromJson.text || "",
                    unix: fromJson.unix || "",
                }
            } else {
                processedItems[i] = {
                    dir: Items[i].dir.S,
                    imgURL: Items[i].imgURL?.S || "",
                    comments: Items[i].comments?.S || "",
                    ogfilename: Items[i].ogfilename?.S || "",
                    text: Items[i].text?.S || "",
                    unix: Items[i].unix.N || "",
                }
            }
        }
        return {
            items: processedItems, lastEvaluatedKey: LastEvaluatedKey ? LastEvaluatedKey.unix.S : null,
        };
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error("Failed to fetch posts");
    }
}