import { html } from 'cute-html';

export const sock = (imgUri, imgFileName, imgRes, commentsCount, txt, id, timeStr) => html`
    <article>
        <img class="image" id="img-${id}" src="${imgUri}" alt="user attached image" loading="lazy" onclick="imgToggleBig(this);">
        <div class="meta">
            <span style="max-width: 50%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${imgFileName}</span>
            <span style="display: inline-block; overflow: hidden;"><span id="imgRes-${id}">(${imgRes})</span> / <i>${timeStr}</i></span>
        </div>
        <div class="body">
            ${txt}
        </div>
        <div style="grid-area: d; padding: 1em; display: flex; flex-direction: column; gap: 1em;">

            <div style="border-top: 1px solid var(--border); padding: 1em;">comment 1</div>
            <div style="border-top: 1px solid var(--border); padding: 1em;">comment 2</div>
            <div style="border-top: 1px solid var(--border); padding: 1em;">comment 3</div>

            <a href>Write comment</a>
            <form style="display: none;">
                <textarea id="comment-body" name="comment-body" style="min-width: 40em; max-width: 40em; min-height: 1em; max-height: 8em; margin: 0px;" rows="4"></textarea>
                <br>
                <input id="comment-form-submit" type="submit" value="Add comment">
            </form>
        </div>
    </article>
`;

