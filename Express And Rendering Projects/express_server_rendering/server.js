const express=require('express');
const todoRoute=require('./routes/todos');
const srv=express();
const hbs=require('hbs')

srv.set('view engine','hbs');
srv.use(express.json());
srv.use(express.urlencoded({extended:true}));


srv.use('/todos',todoRoute);

srv.listen(3456,()=>{
    console.log("Server is running on localhost:3456");
})
