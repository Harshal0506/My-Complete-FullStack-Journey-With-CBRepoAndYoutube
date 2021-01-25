//Benifit of promise
//then can be called anytime


function downloadPromise() {
    return new Promise((resolve,reject)=>{
        console.log("Starting to download the file");
        setTimeout(function () {
            console.log("Download is complete")
            resolve();
            
        },3000)

    })
    
}

let  downloadedFile=downloadPromise();

setTimeout(()=>{
    downloadedFile.then(()=>{
        console.log("After Download")
    })
},10000);