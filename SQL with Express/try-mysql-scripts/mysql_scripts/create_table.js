const mysql=require('mysql2');


const connection=mysql.createConnection({
    host:"localhost",
    database:"mytestdb",
    user:"myuser",
    password:"02225660917"
})

connection.query(`
    create table if not exists persons(
        id integer auto_increment primary key,
        name varchar(50) not null,
        age integer not null,
        city varchar(30)
    )


        `,function(err,results){
            if(err){
                console.error(err);
            }else{
                console.log(results);
            }
            connection.close();
            console.log('work done');


        })