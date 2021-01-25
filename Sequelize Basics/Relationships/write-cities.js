const {db,City}=require('./connect.js');


async function write(name,population,countryId){
    await db.sync();
    await City.create({
        name:name,
        population:population,
        countryId:countryId


    })

    

    await db.close();
}


//there is also something called bulkcreate

write('Mumbai',600000,1);
write('Bangalore',600000,1);
write('Sao Paulo',400000,2);
write('London',500000,3);
write('Manchester',300000,3);
