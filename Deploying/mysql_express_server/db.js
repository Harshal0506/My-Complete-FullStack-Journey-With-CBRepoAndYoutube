const mysql=require('mysql2');



const connection=mysql.createConnection({
    host:'localhost',
    user:'myuser',
    database:'mytestdb',
    password:'02225660917'
})


function getAllPersons(){
    return new Promise((resolve,reject)=>{
        connection.query(`
        select * from persons`,function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })

    })
}


function addNewPerson(name,age,city){
    return new Promise((resolve,reject)=>{
        connection.query(`insert into persons(name,age,city) values(?,?,?)`,[name,age,city],function(err,results){
            if(err){
                reject(err);
            }else{
                resolve();
            }
        })
    })
}


module.exports={
    getAllPersons,
    addNewPerson
}