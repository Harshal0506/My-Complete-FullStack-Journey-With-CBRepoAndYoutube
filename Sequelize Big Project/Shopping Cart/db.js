const Sequelize=require('sequelize');
const { createBrotliCompress } = require('zlib');

const db=new Sequelize('shopdb','shopper','02225660917',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})

const User=db.define('Users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

const Product=db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    manufacturer:Sequelize.STRING,
    price:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
    }
})

db.sync()
.then(()=>{console.log("Database has been Synced");})
.catch((e)=>{console.error(e);})

module.exports={
    db,User,Product
}