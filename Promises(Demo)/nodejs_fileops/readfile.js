const fs=require('fs');

// fs.readFile("myfile.txt",function(err,data){
//     if(err)
//         throw err;
//     console.log(data.toString());
// })

fs.readFile("myfile.txt","utf-8",function(err,data){
    if(err)
        throw err;
    console.log(data);
})