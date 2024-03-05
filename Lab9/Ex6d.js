function download(url, callback) {
    setTimeout(() => {
        // Script to download the picture here
        console.log(`Downloading ${url} ...`);
        let picture_data = "image data:XOXOXO";
        callback(picture_data); // Call the callback function with the downloaded picture data
    }, 3 * 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.comt/big_pic.jpg';
download(url, process); // Pass process as the callback function to be called after download
