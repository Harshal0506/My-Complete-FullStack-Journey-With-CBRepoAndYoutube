const mysql=require('mysql2');

console.log(process.argv);

const insert={
    name:process.argv[2],
    age:parseInt(process.argv[3]),
    city:process.argv[4]
}





const connection=mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'02225660917'
})


connection.query(`insert into persons(name,age,city)values(
    '${insert.name}',
    ${insert.age},
    '${insert.city}'
)`,function(err,results){
    if(err){
        console.log(err);
    }else{
        console.log(results);
    }
    connection.close();
})