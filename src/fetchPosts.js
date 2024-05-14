import {createDynamoDBClient} from "./utils/createDynamoDBClient.js";
import {fetchPostsFromBoard} from './utils/fetchDynamoDB.js';
import {sock} from './components/girl.js';
import {formatDistanceToNow} from 'date-fns';

const USER_POSTS_TABLE = "girlsockdir";

async function main() {
    await getLatest(DIRECTORY);
}

async function getLatest(dir) {
    CuteModal.show('Loading....');
    let posts = await fetchPostsFromBoard(USER_POSTS_TABLE, createDynamoDBClient(), dir, 20);
    CuteModal.hide();
    if (posts.items.length === 0 || undefined || null) alert("Nothing found or server error.");
    // injecting user post and potential comments
    for (let i = 0; i < posts.items.length; i++) {
        let userPost = sock(posts.items[i].imgURL, posts.items[i].ogfilename, "1x1", 0, posts.items[i].text, posts.items[i], compatibilityNewUnixTime(posts.items[i].unix), posts.items[i].unix);
        await $('#articles').inject(userPost);
        for (let c = 0; c < posts.items[i].comments.length; c++) {
            $(`#comments-${posts.items[i].unix}`).inject(`<div class="comment">${posts.items[i].comments[c].text}</div>`);
        }
    }
    // set res metatag of all images
    $$('img.image').forEach(img => {
        const setDim = () => document.getElementById(`imgRes-${img.id.split('-')[1]}`).textContent = `(${img.naturalWidth}x${img.naturalHeight})`;
        img.complete ? setDim() : img.onload = setDim;
    });
}

function compatibilityNewUnixTime(unixTime) {
    if (unixTime < 1725108348) return unixToRelativeTime(unixTime * 1000)
    else return unixToRelativeTime(unixTime) // new time uses milliseconds
}
const unixToRelativeTime = (unixTime) => formatDistanceToNow(new Date(unixTime)) + ' ago';

main();
