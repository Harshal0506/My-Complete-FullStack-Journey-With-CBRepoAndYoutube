const route=require('express').Router();

//This is on the route "/api/" path
const db=require('../db');

route.get('/persons/',(req,res)=>{
    //Send all the persons as an array here
    db.getAllPersons()
    .then((persons)=>{
        
        res.send(persons);
    })
    .catch((err)=>{res.send({error:err});})
})




route.post('/add',(req,res)=>{
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
    .then(()=>{
        
        res.redirect('/api/persons/');  //Redirect to get all persons data
    })
    .catch((err)=>{
        res.send({error:err});
    })
})


module.exports=route;

