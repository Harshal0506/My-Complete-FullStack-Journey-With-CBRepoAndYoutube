console.log(this);

function fun(){
    this.p="something";
    return 10;
}

let o1=fun();   //yaha new compulsory nhi class meh tha
let o2=new fun();
console.log(o1); //10
console.log(o2); //object
console.log(o1.p); //undefined
console.log(o2.p); //something