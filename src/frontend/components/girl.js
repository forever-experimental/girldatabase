import { html } from 'cute-html';

// the below is inserted into the <div class="comments"></div>
// <div class="comment">comment here</div>

export const sock = (imgUri, imgFileName, imgRes, commentsCount, txt, id, timeStr, unix) => html`
    <article>
        <img class="image" id="img-${id}" src="${imgUri}" alt="user attached image" loading="lazy" onclick="imgToggleBig(this);">
        <div class="meta">
            <span style="max-width: 50%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${imgFileName}</span>
            <span style="display: inline-block; overflow: hidden;"><span id="imgRes-${id}">(${imgRes})</span> / <i>${timeStr}</i></span>
        </div>
        <div class="body">
            ${txt}
        </div>
        <div id="comments-${unix}" class="comments">

            <details>
                <summary>Write comment</summary>
                <form>
                    <textarea id="comment-textarea-${unix}" class="comment-body" name="comment-body" rows="4"></textarea>
                    <br>
                    <input id="comment-button-${unix}" class="comment-form-submit" type="submit" value="Add comment" onclick="submitComment(event, this)">
                </form>
            </details>
            
        </div>
    </article>
`;

