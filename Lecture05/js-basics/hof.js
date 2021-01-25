function greet(name){
    console.log('Hello',name);
}

function createGreeter(greeting){
    function greet(name){
        //we can treat as if name is a value
        console.log(greeting,name)
    }
    return greet;
}

function getName(){
    return document.getElementById('namebox').value;
}


let g1=createGreeter('Good Morning');
let g2=createGreeter('Good Evening');

console.log(g1('Arnav'));
console.log(g1('Prateek'));

console.log(g2('Arnav'));
console.log(g2('Prateek'));