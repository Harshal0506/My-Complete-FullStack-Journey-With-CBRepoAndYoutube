const mocha=require('mocha');
const chai=require('chai');
const expect=chai.expect;
const request=require('request');
const axios=require('axios');


const app=require('../server.js');
let server;

describe('server',()=>{
    before((done)=>{
        server=app.listen(2222,done);



        

    })

    // it('rates should be correct',(done)=>{
            
    //         request.get('http://localhost:2222/rate',(err,resp,body)=>{
    //             let rates=JSON.parse(body);
    //             expect(rates.fixed).to.equal(50);
    //             expect(rates.perKm).to.equal(10);
    //             //done always ranned when async function ends
    //             done();
                



    //         })

            

        

    // })
    


    //Ye samjo http  module aur request  string form me return karte h not in form of json as ajax do in object
    //axios in Object

    it('rates should be correct',(done)=>{
            
        request.get('http://localhost:4444/api/persons',(err,resp,body)=>{
            console.log("*********************************Request***********************************")
            console.log(typeof(body));
            console.log(body);
            console.log(body[0]);
            body=JSON.parse(body);
            console.log(body[0]);
            
            
            //done always ranned when async function ends
            done();
            



        })

        

    

})


it('rates should be correct2',()=>{
    console.log("*********************************Axios***********************************")
    return axios.get('http://localhost:4444/api/persons')
        .then((body)=>{
        console.log(typeof(body)); //object
        console.log(body.data);   
        console.log(body.data[0]);
        
        
        
        
        
        //done always ranned when async function ends
        
        
        



    })

    



})


it('rates should be correct3',async()=>{
    console.log("*********************************http***********************************");
    const http = require('http');

    http.get('http://localhost:4444/api/persons', (resp) => {
    let data = '';

    // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(typeof(data));
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

    



})







    after(()=>{
        server.close();
    })



})