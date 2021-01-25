const express=require('express');
const srv=express();
const todoRoute=require("./routes/todos.js")


srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.get('/hello',(req,res,next)=>{
    res.send("Hello");
})

srv.use('/todos',todoRoute);
srv.use('/public',express.static(__dirname+"/public"));

srv.listen(4567,()=>{
    console.log("Server is running on port 4567");
})