const Sequelize=require('sequelize');

const db=new Sequelize('awesomedb','awesomeuser','02225660917',{
    dialect:'mysql',
    host:'localhost'
})

//For checking connection is made
// db.authenticate()
//     .then(()=>{
//         console.log("Connection Made");
//     })
//     .catch(()=>{
//         console.log("Error!");
//     })

const AwesomePlaces=db.define('awesome_place',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    score:{
        type:Sequelize.INTEGER,
        defaultValue:5

    }
})




module.exports={
    db,
    AwesomePlaces
}





    