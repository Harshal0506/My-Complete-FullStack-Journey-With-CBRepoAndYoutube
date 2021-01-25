const {MongoClient}=require('mongodb');

const MONGO_URL='mongodb://localhost:27017';
const DB_NAME='tododb';


//ASYNC IIFE
(async()=>{

    const client=await MongoClient.connect(MONGO_URL);
    const tododb=await client.db(DB_NAME);  //create if not already there

    
    console.log("Connected to the db");

    const todos=tododb.collection('todos');

    

    const result=await todos.insertMany([
        {task: 'a task for anyone', priority: 4},
        {task: 'something anyone can do', priority: 1},
        {task: 'someone should finish this', priority: 2},
        {task: 'tasks for incentive', priority: 2}
    ]);
    console.log(result);


})();