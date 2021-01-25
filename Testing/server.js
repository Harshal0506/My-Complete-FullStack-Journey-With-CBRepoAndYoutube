const express=require('express');
const path=require('path');
const fareUtils=require('./fareUtils');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(path.join(__dirname,'public')));

app.post('/calcfare',(req,res)=>{
	let km=parseFloat(req.body.km);
	let min=parseFloat(req.body.min);
	
	let fare=fareUtils.calcfare(km,min);
	res.send({fare:fare});
})


app.get('/rate',(req,res)=>{
	res.send(fareUtils.rate);
	
})


module.exports=app;