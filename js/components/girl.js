import {html} from 'lit-html';


export const sock = (imgUri, imgFileName, imgRes, commentsCount, txt, id, timeStr) => html`
    <article>
        <img class="image", id="img-${id}" src="${imgUri}" alt="user attached image" loading="lazy">
        <div class="meta">
            ${imgFileName} <span id="imgRes-${id}">(${imgRes})</span> /
            <i>${commentsCount} comments</i> / ${timeStr}
        </div>
        <div class="body">
            ${txt}
        </div>
    </article>
`;

