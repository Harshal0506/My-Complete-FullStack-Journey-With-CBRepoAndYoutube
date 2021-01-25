function task(done) {
    console.log("We are doing a task");
    setTimeout(done,5000);
    
}


task(()=>{console.log("Task was done")});

console.log("We did a task");