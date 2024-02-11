const {$, listen} = require('cute-socks');
const {dynamoDBClient} = require('./utils/awsConfig.js');
const fetchPostsFromBoard = require('./utils/dynamoDbUtils.js');
const {compressImage} = require('./utils/imageUtils.js');
const {uploadSockToCloudFunction} = require('./utils/googleCloud.js');
const {sock} = require('./components/girl.js');
import {html, render} from 'lit-html';

const {getFileNameFromUri} = require('cute-util');

const USER_POSTS_TABLE = "girlsockdir";


async function main()
{
    getLatest('/th/');
    listen($('#post-form-submit'), submitPost);
}


async function getLatest(dir)
{
    let posts = await fetchPostsFromBoard(USER_POSTS_TABLE, dynamoDBClient, dir, 50);
    console.log(posts.items);

    const allSocks = posts.items.map(post => sock(post.imageUrl, post.theFileName, "1x1", "0KB", 0, post.theText));

    // Render all socks at once
    render(html`${allSocks}`, $('#articles'));
}

async function submitPost()
{
    $('#post-form-submit-loading-modal').style.display = 'block';
    const fileInput = $('#post-image');
    const textInput = $('#post-body')?.value;

    if (fileInput.files.length > 0)
    {
        const compressedImage = await compressImage(fileInput.files[0]);
        const response = await uploadSockToCloudFunction('/th/', getFileNameFromUri(fileInput.files[0].name), compressedImage, textInput);
        console.log(response);
        if (response.ok)
        {
            $('#post-form-submit-loading-modal').style.display = 'none';
        }
        return response;
    }
}

main();

