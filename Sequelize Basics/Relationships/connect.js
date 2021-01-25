const Sequelize=require('sequelize');
const db=new Sequelize({
    dialect:'mysql',
    host:'localhost',
    database:'awesomedb',
    username:'awesomeuser',
    password:'02225660917'

})

const Country=db.define('country',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    code:{
        type:Sequelize.STRING(2),
        allowNull:false
    }
});

const City=db.define('city',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    population:{
        type:Sequelize.INTEGER
    }
})

City.belongsTo(Country);
Country.hasMany(City);

module.exports={
    db,
    City,
    Country
}



