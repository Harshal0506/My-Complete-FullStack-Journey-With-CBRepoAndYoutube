console.log(alpha());



function alpha(){
    return "A";
}

console.log(beta());

function beta(){
    return "B";
}
// console.log(gamma());  //Hostinng of let is not done 2 run me load karte h

let gamma=function(){
    return "C";
}
console.log(gamma());

function area(height,width){
    if(!width){
        return Math.PI*height*height;
    }
    return height*width;
}

console.log('area 3,4',area(3,4));
console.log('area 4',area(4));

function hello(){
    //let arguments="jsdkd"
    console.log('hello world',arguments[0],arguments[1]);
}
hello('a','b')
hello('Arnav','Gupta')