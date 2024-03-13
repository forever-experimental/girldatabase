import { html } from 'https://cdn.jsdelivr.net/npm/cute-html@1.0.1';

export const directory = (title, description) => html`
    <!-- directory description -->
    <div style="text-align: center; padding: 4em 1em;">
        <h1 style="margin: 0; font-family: 'PT Serif', serif;">Welcome to /${title}/</h1>
        <p>${description}</p>
    </div>

    <!-- post submission box -->
    <form id="post-form">
        <input type="file" id="post-image" name="post-image" accept="image/png, image/jpeg"/>
        <br>
        <textarea id="post-body" name="post-body" style="min-width: 100%; max-width: 100%; min-height: 1em; max-height: 24em;" rows="4"></textarea>
        <br>
        <input id="post-form-submit" type="submit" value="Submit">
    </form>

    <div id="articles"></div>
`;
