let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let btnEncrypt = document.getElementById('btnEncrypt')

let code = document.getElementById('code')

btnEncode.onclick = function () {
    let data = inpCode.value 
    data = btoa(data)
    code.value = data
}

btnEncrypt.onclick = function () {
    let data = code.value
    data = encryptData(data)
    code.value = data
}

function encryptData(rawData) {
    /*
        TODO: actually encrypt data
        logic: turn lowercase chars to uppercase and viceversa 
     */
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