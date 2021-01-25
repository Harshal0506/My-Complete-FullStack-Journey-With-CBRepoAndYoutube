const fs=require('fs');

fs.writeFileSync('HelloWorld.txt','HelloWorld');
const data=fs.readFileSync('HelloWorld.txt');
console.log(data.toString());
