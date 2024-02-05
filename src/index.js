const {$, $$} = require('cute-socks');


document.addEventListener('DOMContentLoaded', onDomContentLoad);


function onDomContentLoad()
{
    $('#post-form-submit').addEventListener('click', function (event)
    {
        event.preventDefault();
        $('#post-form-submit-loading-modal').style.display = 'block';
        submitPost();
    });
}

function submitPost()
{
    // TODO
}