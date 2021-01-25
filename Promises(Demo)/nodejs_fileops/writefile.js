const fs=require('fs');

fs.writeFile(__dirname+"/myfile.txt","Harshal Jain Is Blessed",function(err){
    if(err)
        throw err;
    console.log("file is ready!!")
})