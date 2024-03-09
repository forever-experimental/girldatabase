import { html } from 'https://cdn.jsdelivr.net/npm/cute-html/+esm';

export const homedir = () => html`
    <style>
        #flex { display: flex; gap: 1em; }
        #flex > div { flex: 1; border: 1px solid var(--border); padding: 1em; }

        h1 { font-size: 1em; margin: 1em 0; }

        li { margin-bottom: 1em; }

        #articles { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1em; }
        article { display: flex; border: 1px solid var(--border); }
        article > img { max-width: 150px; max-height: 150px; cursor: pointer; }
        /* the body text */
        article > div { padding: 1em; flex: 1; }
    </style>

    <div id="flex">
        <div>
            <h1>Rules</h1>
            <ol>
                <li><strong>Each directory has additional rules.</strong> Adhere to them.</li>
                <li><strong>The text in posts</strong> may not be discriminatory, targeting, or overly hostile.</li>
                <li><strong>When posting lewd photos</strong> (i.e. not drawings), ensure that any people in the picture consent to it being posted.</li>
            </ol>
        </div>
        <div>
            <h1>Directories</h1>
            <table style="font-family: monospace; font-size: 1.1em; margin: 1em 0;">
                <tr>
                    <td style="padding-right: 4em;">index/</td>
                </tr>
                <tr>
                    <td>├── <a href="/th">th/</a></td>
                    <td># thigh highs</td>
                </tr>
                <tr>
                    <td>├── <a href="/f">f/</a></td>
                    <td># fat</td>
                </tr>
                <tr>
                    <td>├── <a href="/ai">ai/</a></td>
                    <td># artificial intelligence</td>
                </tr>
                <tr>
                    <td>└── <a href="/l">l/</a></td>
                    <td># conlangs and linguistics</td>
                </tr>
            </table>
        </div>
    </div>

    <!-- goat stats widget (doesn't look very good) -->
    <!-- <iframe src="https://wetrackyouinyoursleep.goatcounter.com/?hideui=1"></iframe> -->
`;
