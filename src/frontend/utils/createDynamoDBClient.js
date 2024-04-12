import {CognitoIdentityClient} from "@aws-sdk/client-cognito-identity";
import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity";
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

export const createDynamoDBClient = (region = "us-west-2", identityPoolId = "us-west-2:5cf2c915-001b-4190-ad65-6f10af3a375c") =>
{
    return new DynamoDBClient({
        region, credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({region}), identityPoolId,
        }),
    });
};

