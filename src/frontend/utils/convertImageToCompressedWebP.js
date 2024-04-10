// js/imageUtils.js

async function compressImage(file) {
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
                    } else if (quality > 0.1) {
                        quality -= 0.1; // Decrease quality by 0.1
                        canvas.toBlob(compress, 'image/webp', quality); // Recompress with lower quality
                    } else {
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

module.exports.compressImage = compressImage;
