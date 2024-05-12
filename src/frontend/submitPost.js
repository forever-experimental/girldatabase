//import {compressImage} from "./utils/convertImageToCompressedWebP";
//import {uploadSockToCloudFunction} from "./utils/GCF_PostPost";
$('#post-form-submit').onclick = onclick_submitPost;


async function onclick_submitPost(event) {
    event.preventDefault();
    CuteModal.show('Submitting...');

    //let dir = getLastPartOfUrl();

    if ($('#post-image').files.length > 0) {
        //const compressedImage = await compressImage($('#post-image').files[0]);
        //const response = await uploadSockToCloudFunction(`/${dir}/`, getFileNameFromUri(fileInput.files[0].name), compressedImage, $('#post-body')?.value);
        // send image
        //const response = await fetch('//bit.xn--tckwe/post', {
        const response = await fetch('//127.0.0.1:8787/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dir: "/test/",
                fileName: "test.webp",
                imageContent: $('#post-image').files[0],
                text: $('#post-body')?.value
            })
        });
        console.log(response);

        if (response.ok) {
            window.location.reload();
        } else {
            alert("Upload failed: " + response);
        }
        CuteModal.hide();
        return response;
    } else {
        alert("No image selected.");
        CuteModal.hide();
    }
}

function getLastPartOfUrl ()  {
    const segments = window.location.pathname.split('/').filter(Boolean); // Split by '/' and filter out empty segments
    return segments.pop(); // Get the last segment
};