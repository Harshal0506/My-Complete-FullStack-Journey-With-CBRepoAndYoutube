const { Socket } = require('dgram');
const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const socketIo=require('socket.io');
const io=socketIo(server);

let users={

}

var socketMap={

}

io.on('connection',(socket)=>{
    console.log('connected with socket id =',socket.id);
    socket.on('login', (data) => {
        if(users[data.username]){
            if(data.password==users[data.username]){
                socket.join(data.username)
                socket.emit('logged_in')
                socketMap[socket.id]=data.username;
                console.log(socketMap);

            }else{
                socket.emit('login_failed');
            }

        }else{
            users[data.username]=data.password;
            socket.join(data.username)
            socket.emit('logged_in')
            socketMap[socket.id]=data.username;
            
        }







        
    })

    socket.on('msg_send',(data)=>{
        data.from=socketMap[socket.id];
        if(data.to){
            io.to(`${data.to}`).emit('msg_rcvd',data);
        }else{
            socket.broadcast.emit('msg_rcvd',data);
        }

        
    })

    
})

app.use('/',express.static(__dirname+"/public"));

server.listen(3344,()=>{
    console.log("Started on localhost 3344");
})
