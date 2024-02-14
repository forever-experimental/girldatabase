import { html } from 'https://cdn.jsdelivr.net/npm/lit-html/lit-html.js';

export const index = () => html`
    <!-- directory description -->
    <div style="text-align: center; padding: 4em 1em;">
        <h1 style="margin: 0; font-family: 'PT Serif', serif;">Welcome to /th/</h1>
        <p>Every post must have a girl with thigh highs. Click on an image to view a post and its comments.</p>
    </div>
    
    <!-- post submission box -->
    <form id="post-form">
        <input type="file" id="post-image" name="post-image" accept="image/png, image/jpeg"/>
        <br>
        <textarea id="post-body" name="post-body" style="min-width: 100%; max-width: 100%; min-height: 1em; max-height: 24em;" rows="4"></textarea>
        <br>
        <input id="post-form-submit" type="submit" value="Submit">
    </form>
    
    <div id="articles">
        <!--
        <article>
            <img class="image" onclick="alert('wip')" src="filename.png">
            <div class="meta">
                filename.png (100x100, 100KB) / <i>100 comments</i>
            </div>
            <div class="body">
                body text
            </div>
        </article>
        -->
    </div>

    <!-- Loading Modal Structure -->
    <div id="post-form-submit-loading-modal" style="display:none; position:fixed; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.5);">
        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); padding:20px; background:#fff;">
            Loading....
        </div>
    </div>
`;
