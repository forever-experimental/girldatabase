var waitForElementAndExecute = (selector, funcToCall, maxAttempts = 10, interval = 300) => {
    const attemptToFindElement = (attempts) => {
        if ($(selector)) funcToCall();
        else if (attempts > 0) setTimeout(() => attemptToFindElement(attempts - 1), interval);
        else throw new Error(`Element not found after maximum attempts: ${selector}`);
    };
    attemptToFindElement(maxAttempts);
};

// Usage example: Execute function when '#post-form-submit' is available in the DOM
waitForElementAndExecute('#post-form-submit', onrender);

function onrender() {
    $('#post-form-submit').onclick = onclick_submitPost;
}

async function onclick_submitPost(event) {
    event.preventDefault();
    CuteModal.show('Submitting...');
    if ($('#post-image').files.length > 0) {
        const compressedBlob = await compressImage($('#post-image').files[0]);
        const response = await fetch('//girl.bit.コム/post', {
        //const response = await fetch('//127.0.0.1:8787/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dir: DIRECTORY,
                fileName: $('#post-image').files[0].name + '.webp',
                imageContent: await fileOrBlobToBase64(compressedBlob),
                text: $('#post-body')?.value
            })
        });
        console.log(response);
        if (response.ok) {
            window.location.reload();
        }
        else alert("Upload failed: " + response);
        CuteModal.hide();
        return response;
    }
    else {
        alert("No image selected.");
        CuteModal.hide();
    }
}

async function fileOrBlobToBase64(fileOrBlob) { // $('#post-image').files[0]
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]); // removes type
        reader.onerror = error => reject(error);
        reader.readAsDataURL(fileOrBlob);
    });
}

export async function compressImage(file) {
    const MAX_SIZE_MB = 3;
    const MB = 1024 * 1024;
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            let quality = 0.8; // Initial compression quality
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);
            const compress = () => {
                canvas.toBlob((blob) => {
                    if (blob.size / MB <= MAX_SIZE_MB) {
                        resolve(blob); // Size is under 3 MB, resolve the promise
                    }
                    else if (quality > 0.1) {
                        quality -= 0.1; // Decrease quality by 0.1
                        canvas.toBlob(compress, 'image/webp', quality); // Recompress with lower quality
                    }
                    else {
                        // If reached here, unable to compress below 3 MB
                        reject(new Error('Unable to compress image below 3 MB'));
                    }
                }, 'image/webp', quality);
            };

            compress(); // Start the compression process
        };
        img.onerror = () => {
            reject(new Error('Image loading error'));
        };
        const reader = new FileReader();
        reader.onload = (e) => {
            img.src = e.target.result;
        };
        reader.onerror = () => {
            reject(new Error('FileReader error'));
        };
        reader.readAsDataURL(file);
    });
}