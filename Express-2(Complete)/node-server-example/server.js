const express=require('express');
const server=express();


server.get('/',function(req,res,next){
    console.log("Yo");
    res.send("Hello World");
})

server.get('/greet/:tod',function(req,res,next){
    let tod="Morning"
    switch (req.params.tod) {
        case 'evening':
            tod="Evening";
            break;
    
        case 'night':
            tod='Night';
            break;
    }
    let greeting ="Good "+tod+", "+req.query.name;
    res.send(greeting);
})


server.get('/html',function(req,res,next){
    res.send(`
    <html>
        <body>
            <h1>This is a HTML page</h1>
            <i>This looks really nice</i>
        </body>
    </html>
    `)
})





server.listen(4444,()=>{
    console.log("Server is running on port 4444");
})