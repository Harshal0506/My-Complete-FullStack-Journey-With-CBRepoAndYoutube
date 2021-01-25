const express=require('express');
const app=express();
const db=require('./db');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',express.static(__dirname+"/public"));


app.set('view engine','hbs');





app.use('/api',require('./routes/api'))
app.use('/pages',require('./routes/pages'))



app.listen(4444,()=>{
    console.log("Server is running on port 4444");
})