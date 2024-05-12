export async function uploadSockToCloudFunction(dir, fileName, imageBlob, text)
{
    const cloudFunctionUrl = 'https://us-central1-enduring-maxim-411523.cloudfunctions.net/girlsock-directory_image-upload';

    const imageContent = await toBase64(imageBlob);
    fileName += '.webp';

    const body = JSON.stringify({
        dir,
        fileName,
        imageContent,
        text
    });


    try
    {
        const response = await fetch(cloudFunctionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body
        });

        //console.log(response);

        const responseClone = response.clone();
        return await responseClone;
    }
    catch (error)
    {
        throw new Error(`Network error: ${error.message}`);
    }
}


function toBase64(file)
{
    return new Promise((resolve, reject) =>
    {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });
}