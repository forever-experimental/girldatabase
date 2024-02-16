const {$, $$, listen} = require('cute-socks');
const {createDynamoDBClient} = require('./utils/createDynamoDBClient.js');
const fetchPostsFromBoard = require('./utils/fetchDynamoDB.js');
const {compressImage} = require('./utils/convertImageToCompressedWebP.js');
const {uploadSockToCloudFunction} = require('./utils/GCF_PostPost.js');
const {sock} = require('./components/girl.js');
import {html, render} from 'lit-html';
import {formatDistanceToNow} from 'date-fns';

const {getFileNameFromUri} = require('cute-util');

const USER_POSTS_TABLE = "girlsockdir";

//
async function main()
{
    let dirToPull = getLastPartOfUrl();
    if (dirToPull === "index.html") // local test
    {dirToPull = 'th';}
    getLatest(dirToPull);
    listen($('#post-form-submit'), submitPost);
    console.log();
}


async function getLatest(dir)
{
    CuteLoadingModal.show();
    let posts = await fetchPostsFromBoard(USER_POSTS_TABLE, createDynamoDBClient(), dir, 20);
    CuteLoadingModal.hide();
    if (posts.items.length === 0 || undefined || null)
    {
        alert("Nothing found or server error.");
    }

    const allSocks = posts.items.map((post, index) => sock(post.imageUrl, post.theFileName, "1x1", 0, post.theText, index, unixToRelativeTime(post.theUnix)));

    // Render all socks at once
    render(html`${allSocks}`, $('#articles'));

    // set res metatag of all images
    $$('img.image').forEach(img =>
    {
        const setDim = () => document.getElementById(`imgRes-${img.id.split('-')[1]}`).textContent = `(${img.naturalWidth}x${img.naturalHeight})`;
        img.complete ? setDim() : img.onload = setDim;
    });
}

async function submitPost()
{
    CuteLoadingModal.show();

    let dir = getLastPartOfUrl();
    if (dir === "index.html") // local test
    {dir = 'th';}

    const fileInput = $('#post-image');
    const textInput = $('#post-body')?.value;

    if (fileInput.files.length > 0)
    {
        const compressedImage = await compressImage(fileInput.files[0]);
        const response = await uploadSockToCloudFunction(`/${dir}/`, getFileNameFromUri(fileInput.files[0].name), compressedImage, textInput);
        console.log(response);

        if (response.ok)
        {
            CuteLoadingModal.hide();
            window.location.reload();
        }
        else
        {
            CuteLoadingModal.hide();
            alert("Upload failed: " + response);
        }
        return response;
    }
}

const CuteLoadingModal = (() =>
{
    const cuteLoadingModalDisplayNoneHtml = () => html`
        <div id="post-form-submit-loading-modal" style="display:none; position:fixed; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.5);">
            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); padding:20px; background:#fff;">
                Loading....
            </div>
        </div>
    `;

    return {
        show: () =>
        {
            $('#post-form-submit-loading-modal').style.display = 'block';
        }, hide: () =>
        {
            $('#post-form-submit-loading-modal').style.display = 'none';
        }
    };
})();

const unixTimeToDateTimeStr = (unixTime) => new Date(unixTime * 1000).toLocaleString();
const unixToRelativeTime = (unixTime) => formatDistanceToNow(new Date(unixTime * 1000)) + ' ago';

const getLastPartOfUrl = () =>
{
    const segments = window.location.pathname.split('/').filter(Boolean); // Split by '/' and filter out empty segments
    return segments.pop(); // Get the last segment
};

// const injectContent = (targetSelector, newContent) => {
//     const target = $(targetSelector);
//     if (target) {
//         const currentContent = html`${target.innerHTML}`;
//         const combinedContent = html`${currentContent}${newContent}`;
//         render(combinedContent, target);
//     } else {
//         console.error(`Target selector "${targetSelector}" not found.`);
//     }
// };

main();

