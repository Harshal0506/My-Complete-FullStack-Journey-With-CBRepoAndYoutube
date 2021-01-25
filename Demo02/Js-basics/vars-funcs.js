console.log("Hello");

let x=10;
let y=11;
console.log(x/4);

let a=10;
let b='asjksdhjsd';
let c=true;
let d=[1,2,3];

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(null));
//equality

console.log(1==1);
console.log(1=='1');
console.log(1==='1');


console.log(0=='');
console.log(NaN==undefined);
console.log(null==undefined);

//functions

function add(a,b){
    return a+b;
}


// function add(a){   //it will not overload it will replace the old defn totally
//     return a;
// }

//variable arg and no let needed in js function

function printVal(arg){
    console.log('arg==',arg);
}


function area(a,b){
    if(b===undefined){
        
        return a*a;
    }
    return a*b;
}

