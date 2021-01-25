const {db,AwesomePlaces }=require('./connect.js');


async function listPlaces(){
    db.sync()
    .then(()=>AwesomePlaces.findAll())
    .then((places)=>{
        for(place of places){
            console.log(`${place.name} \t\t ${place.score}`)
        }
    })
    .then(()=>{
        db.close();
    })
    .catch(()=>{console.log("Error");})


}


listPlaces();