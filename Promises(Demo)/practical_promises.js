function download(url) {
    return new Promise((resolve,reject)=>{
    if(!url.startsWith('http')){
        reject(new Error("Url does not start with http"));        
    }else{
        console.log("Start download:"+url);
        setTimeout(function () {//Take fake 3 seconds for download
            let fileName=url.split("/").pop();
            resolve(fileName);

            
        },3000)
    }
})
    
}


function resize(fileName) {
    return new Promise((resolve,reject)=>{
        if(!fileName.endsWith(".png")){
            reject(new Error("File is not png"))
        }else{
            console.log("Start resize:"+fileName);
            setTimeout(
                ()=>{ //fake 3-sec resizing drama
                    //change x.png ->x-resized.png
                    let resizedFile=fileName.split(".")[0]+"-resized."+fileName.split(".")[1];
                    resolve(resizedFile);

                },3000
            )
        }

    })
    
}



function upload (resizedFileName) {
    return new Promise(function (resolve, reject) {
        console.log("Start upload : " + resizedFileName)
        setTimeout(function() { // fake 3-sec upload task
            let uploadedUrl = "http://imgur.com/" + resizedFileName
            resolve(uploadedUrl)
        }, 3000)
    })
}

download('http://cb.lk/logo.png')
    .then(resize)
    .then(upload)
    .then((uploadedUrl)=>{
        console.log("File was uploaded to:"+uploadedUrl);
    })
    .catch((err)=>{
        console.log(err.message);
    })