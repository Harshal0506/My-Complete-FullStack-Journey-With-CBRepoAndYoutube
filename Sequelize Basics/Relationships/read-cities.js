const {db,City,Country}=require('./connect');

async function ReadCities(){
    await db.sync();
    const cities=await City.findAll({
        attributes:['name','population'],
        include:[{model:Country}]
    })

    
    await cities.forEach(city => {
        console.log(`${city.population} \t\t  ${city.country.id}\t\t  ${city.country.name}\t\t${city.name}`)
        
    });
    await db.close();
}

ReadCities();