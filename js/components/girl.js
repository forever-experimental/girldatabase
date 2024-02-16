import { html } from 'https://cdn.jsdelivr.net/npm/lit-html/lit-html.js';

export const sock = (imgUri, imgFileName, imgRes, commentsCount, txt, id, timeStr) => html`
    <article>
        <img class="image", id="img-${id}" src="${imgUri}" alt="user attached image" loading="lazy">
        <div class="meta">
            <span style="max-width: 50%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${imgFileName}</span>
            <span id="imgRes-${id}">(${imgRes})</span> /
            <i>${timeStr}</i>
        </div>
        <div class="body">
            ${txt}
        </div>
    </article>
`;

