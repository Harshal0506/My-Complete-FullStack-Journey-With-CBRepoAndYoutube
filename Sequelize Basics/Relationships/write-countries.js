const {db,Country}=require('./connect.js');

async function write(){
    await db.sync();
    await Country.bulkCreate([
        {name: 'U.S. of America', code: 'US'},
        {name: 'United Kingdom', code: 'UK'},
        {name: 'Brazil', code: 'BR'}
    ]);
    await db.close();

}

write();