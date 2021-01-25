const express=require('express');


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(__dirname+"/public"));
app.use('/api',require('./routes/api'));

app.listen(4000,()=>{
    console.log("I am Hearing on server 4000");
})