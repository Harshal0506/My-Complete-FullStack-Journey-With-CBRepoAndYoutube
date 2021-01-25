const express=require('express');
const app=express();

let todos=[
    'first task',
    'second task'
];

app.get('/',(req,res)=>{
    let listOfTodos='';
    for(let i=0;i<todos.length;i++){
        listOfTodos+='<li>'+todos[i]+'</li>';
    }

    let html=`
    <html>
    <body>
    <form action="add">
        <input type="text" name="task">
        <button type="submit">ADD</button>
    </form>

    <ul>
    ${listOfTodos}
    </ul>
    </body>
    </html>
    
    `
    res.send(html);
});

app.get('/add',(req,res)=>{
  console.log(req.query.task);
  todos.push(req.query.task);

    
  res.redirect('/');  
});



app.listen(4040,()=>{
    console.log("server is running on port 4040");
});