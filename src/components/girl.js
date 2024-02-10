import {html, render} from 'lit-html';


export const sock = (imgUri, imgFileName, imgRes, imgSize, commentsCount, txt) => html`
    <article>
        <img class="image" onclick="alert('wip')" src="${imgUri}" alt="socky">
        <div class="meta">
            ${imgFileName} (${imgRes}, ${imgSize}) / <i>${commentsCount} comments</i>
        </div>
        <div class="body">
            ${txt}
        </div>
    </article>
`;

