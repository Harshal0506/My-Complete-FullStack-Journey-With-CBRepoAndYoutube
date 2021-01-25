const {db}=require('./db/model.js');
const {app}=require('./server.js');

const start=async()=>{
    try{
        await db.sync();

        app.listen(5555,function(){
            console.log('Server started on localhost:5555');
        })



    }catch(err){
        console.error(err);
    }

}
start();