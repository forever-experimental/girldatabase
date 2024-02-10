import {CognitoIdentityClient} from "@aws-sdk/client-cognito-identity";
import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity";
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

const REGION = "us-west-2";
const IDENTITY_POOL_ID = "us-west-2:5cf2c915-001b-4190-ad65-6f10af3a375c";

const dynamoDBClient = new DynamoDBClient({
    region: REGION,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({region: REGION}),
        identityPoolId: IDENTITY_POOL_ID,
    }),
});

module.exports.dynamoDBClient = dynamoDBClient;
