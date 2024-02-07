const {$, $$} = require('cute-socks');
// const {dynamoDBClient} require('./util/awsConfig.js');
// const {getLatestPosts} require('./util/dynamoDbUtils.js');
const {compressImage} = require('./util/imageUtils.js');
const {uploadSockToCloudFunction} = require('./util/googleCloud.js');

const {getUriExtension, getFileNameFromUri} = require('cute-util');

const USER_POSTS_TABLE = "girlsockdir"; // DynamoDB Table Name

document.addEventListener('DOMContentLoaded', onDomContentLoad);


function onDomContentLoad()
{
    $('#post-form-submit').addEventListener('click', async function (event)
    {
        event.preventDefault();
        $('#post-form-submit-loading-modal').style.display = 'block';
        let respo = await submitPost();
        if (respo.ok)
        {
            $('#post-form-submit-loading-modal').style.display = 'none';
        }
    });
}

async function submitPost()
{
    const fileInput = $('#post-image');
    const textInput = $('#post-body')?.value;

    if (fileInput.files.length > 0)
    {
        const compressedImage = await compressImage(fileInput.files[0]);
        const response = await uploadSockToCloudFunction('/th/', getFileNameFromUri(fileInput.files[0].name), compressedImage, textInput);
        console.log(response.ok);
        return response;

    }
}