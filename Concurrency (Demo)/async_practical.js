function  downloadFile(url,downloaded) {
    // We are downloading the file here
    // Let's assume it takes 3 seconds to download
    // We use setTimeout to generate fake delay

    console.log("Downloading File : "+url);

    setTimeout(function () {
        let filePath="C:\\Downloads\\"+url.split('/').pop();
        console.log("File was downloaded to: "+filePath);
        downloaded(filePath);
        
    },3000);
    
}

function resizeFile(filepath,resized) {
    //we are resizing the file .It takes 3 seconds
    //We again use a fake setTimeout delay

    console.log("We are resizing:"+filepath);
    setTimeout(
        function () {
            let newPath=filepath.split(".")[0]+"-resized."+filepath.split(".")[1];
            console.log("we resized to :"+newPath);
            resized(newPath);
            
        },3000
    )
    
}

function uploadFile(diskPath, uploaded) {
    //We will upload this file, it takes 3 seconds,
    //We will use another fake setTimeout delay logic
    setTimeout(function () {
        let uploadedPath = "http://harsh.lk/uploads/" + diskPath.split('\\').pop();
        console.log("We uploaded to " + uploadedPath)
        uploaded(uploadedPath)
    }, 3000)
}

downloadFile("http://google.com/logo.png",function (downloadedPath) {
    resizeFile(downloadedPath,function (resizedPath) {
        uploadFile(resizedPath,function (uploadUrl) {
            console.log("Uploaded Successfully to "+uploadUrl);
            
        })
        
    })
    
})