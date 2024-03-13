const {createDynamoDBClient} = require('./utils/createDynamoDBClient.js');
const fetchPostsFromBoard = require('./utils/fetchDynamoDB.js');
const {compressImage} = require('./utils/convertImageToCompressedWebP.js');
const {uploadSockToCloudFunction} = require('./utils/GCF_PostPost.js');
const {sock} = require('./components/girl.js');
import { html, $ , $$} from 'cute-html';
import { formatDistanceToNow } from 'date-fns';

const {getFileNameFromUri} = require('cute-util');

const USER_POSTS_TABLE = "girlsockdir";

async function main()
{
    let dirToPull = getLastPartOfUrl();
    await getLatest(dirToPull);
    $('#post-form-submit').onclick = submitPost;
}

async function getLatest(dir)
{
    CuteLoadingModal.show();
    let posts = await fetchPostsFromBoard(USER_POSTS_TABLE, createDynamoDBClient(), dir, 20);
    CuteLoadingModal.hide();
    if (posts.items.length === 0 || undefined || null) {
        alert("Nothing found or server error.");
    }

    const allSocks = posts.items.map((post, index) => sock(post.imageUrl, post.theFileName, "1x1", 0, post.theText, index, unixToRelativeTime(post.theUnix)));

    // Render all socks at once
    $('#articles').render(html`${allSocks}`);
    // set res metatag of all images
   $$('img.image').forEach(img =>
    {
        const setDim = () => document.getElementById(`imgRes-${img.id.split('-')[1]}`).textContent = `(${img.naturalWidth}x${img.naturalHeight})`;
        img.complete ? setDim() : img.onload = setDim;
    });
}

async function submitPost(event)
{
    event.preventDefault();
    CuteLoadingModal.show();

    let dir = getLastPartOfUrl();

    const fileInput = $('#post-image');
    const textInput = $('#post-body')?.value;

    if (fileInput.files.length > 0) {
        const compressedImage = await compressImage(fileInput.files[0]);
        const response = await uploadSockToCloudFunction(`/${dir}/`, getFileNameFromUri(fileInput.files[0].name), compressedImage, textInput);
        console.log(response);

        if (response.ok) {
            CuteLoadingModal.hide();
            window.location.reload();
            console.log("reloaded");
        }
        else {
            CuteLoadingModal.hide();
            alert("Upload failed: " + response);
        }
        return response;
    }
    else {
        alert("No image selected.");
        CuteLoadingModal.hide();
    }
}

const CuteLoadingModal = {
    modalTemplate: html`
      <div id="post-form-submit-loading-modal" style="position:fixed; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.5);">
        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); padding:20px; background:#fff;">
          Loading....
        </div>
      </div>
    `, show: () => $('body').inject(CuteLoadingModal.modalTemplate), hide: () => $('#post-form-submit-loading-modal').remove()
};

const unixTimeToDateTimeStr = (unixTime) => new Date(unixTime * 1000).toLocaleString();
const unixToRelativeTime = (unixTime) => formatDistanceToNow(new Date(unixTime * 1000)) + ' ago';

const getLastPartOfUrl = () =>
{
    const segments = window.location.pathname.split('/').filter(Boolean); // Split by '/' and filter out empty segments
    return segments.pop(); // Get the last segment
};

main();
