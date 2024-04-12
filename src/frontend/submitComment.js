async function submitComment(event, htmlNodeOfButtonThatWasClicked) {
    event.preventDefault();
    const postUnixId = htmlNodeOfButtonThatWasClicked.id.split('-')[2];
    const currentDir = pathSegments[(onGitHubPages || window.location.hostname === 'localhost') && pathSegments.length > 1 ? 1 : 0];
    //console.log(postUnixId);
    //console.log(document.querySelector(`#comment-textarea-${postUnixId}`).value);
    fetch('https://girl.awww.workers.dev/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "dir": `/${currentDir}/`,
            "unix": parseInt(postUnixId),
            "comment": document.querySelector(`#comment-textarea-${postUnixId}`).value
        })
    })
        .then(response => window.location.reload())
        .catch(error => {
            console.error(error);
        });


}