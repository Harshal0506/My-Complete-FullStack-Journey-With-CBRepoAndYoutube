// Answer in context of C++/Java
// What does the keyword "this" mean, what does it refer to ?
// In which places in code can we NOT use "this" ?
//this works quite differently
//inside an class or function when we use new for a new object
//we use it inside obj
//by default it points to object its inside of means kaha bhi use karo (window )
//this is fixed on runtime

function checkThis(){
    console.log(this);
}

let obj={
    "a":10,
    b:'asssd',
    c:true,
    d:function(){
        console.log(this);
    },
    10:32343,
    true:'dkjsd',
    e:{
        l:234,
        m:'sjkdsdsd',
        n:function(){
            console.log(this);
        },
    },

}
// let x=obj.d;
// console.log(checkThis());
// console.log("runtime proof",x(),obj.d());


let y=obj.e.n;
console.log(y(),obj.e.n());

//key is a string in object
//obj['10']
//obj['true']

