const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))


function toggleData(rawData) {
    
    console.log(rawData);
    rawData=rawData.split('');
    for(let x in rawData){
        if(rawData[x]==rawData[x].toLowerCase())
            rawData[x]=rawData[x].toUpperCase();
        else
            rawData[x]=rawData[x].toLowerCase();
        

    }
    rawData=rawData.join('');


    return rawData;
}
function decryptQueryParams(req, res ,next) {

    // TODO: decrypt all query params as per our logic
    let data=toggleData(req.query.code);
    req.query.code=data;


    next()
}

function decodeQueryBase64(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q] 
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval', decryptQueryParams, decodeQueryBase64, (req, res) => {
    console.log(req.query.code)

    // TODO: eval the code actually
    let ans=eval(req.query.code);
    console.log(ans);
    res.send(`The evaluated result is ${ans}`);
})

app.listen(4545, () => {
    console.log('server started on http://localhost:4545')
})