const express=require('express');
// console.log(typeof express);

const app=express();
app.use(express.urlencoded({extended:true}));
app.use("/stuff",express.static(__dirname+"/public"))

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})


app.get('/greet',(req,res)=>{
    // console.log(req);
    // console.log(req.url);
    // console.log(req.query);
    // console.log(req.params);
    // console.log(req.body);
    //url query passing samja humne
    let person="Guest";
    if(req.query.person)
        person=req.query.person;
    res.send("Good Evening "+person)

})


app.get('/form',(req,res)=>{
    res.sendFile(__dirname+"/files/index.html")
})

app.get('/:city/:welcome',(req,res)=>{
    let city=req.params.city;
    let welcome=req.params.welcome;
    res.send( welcome+" to: "+city);
})

//1st hi chalega if same ho as 2nd tak pohochega hi nhi
// app.get('/:x/:y',(req,res)=>{
//     let city=req.params.x;
//     let welcome=req.params.y;
//     res.send( welcome+" in "+city);
// })



app.post('/greet',(req,res)=>{

    // in post request nothing called query is passed in url
    //it get passed in req.body which is not directly accessable in express
    let person="Guest";
    if(req.body.person)
        person=req.body.person;
    res.send("Good Evening "+person)

})






app.listen(4444,()=>{
    console.log("Server is running on localhost:4444")
})