// Configuration for AWS SDK
import {CognitoIdentityClient} from "@aws-sdk/client-cognito-identity";
import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity";
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

const REGION = "us-west-2";
const IDENTITY_POOL_ID = "us-east-2:a3352194-7c70-4e6f-9a73-255adcdb011a";

const dynamoDBClient = new DynamoDBClient({
    region: REGION,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({region: REGION}),
        identityPoolId: IDENTITY_POOL_ID,
    }),
});

module.exports.dynamoDBClient = dynamoDBClient;
