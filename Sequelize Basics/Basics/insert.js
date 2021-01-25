const {db,AwesomePlaces}=require('./connect.js');

async function addPlace(placeName,score){
    
    db.sync()
    .then(()=>AwesomePlaces.create({
        name:placeName,
        score:score
    }))
    .then(()=>{console.log("Task done");})
    .then(()=>{console.log("Done ke baad done");})
    .then(()=>{db.close();})


}

addPlace('kashmir',10);
