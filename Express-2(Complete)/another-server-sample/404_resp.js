const express=require('express');

const app=express();

app.get('/a',(req,res)=>{
    res.send("AAAAAAAAAAAA");
})

app.get('/b',(req,res)=>{
    res.send("BBBBBBBBB");
})


app.use((req,res)=>{res.send("<h4>404 not found</h4>")});

app.listen(4444,()=>{
    console.log("Server is running on port 4444");
})