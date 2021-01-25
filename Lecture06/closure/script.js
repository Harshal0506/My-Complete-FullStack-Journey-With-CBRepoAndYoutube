function outer(arg1){
    let var1=10;
    let x=10;
    //argument [2](11) is only accessible here
    //if you want to pass make a var here and store it clossure usme help karega but argument ko access nhi kar sakte 
    //concept of clossure
    function inner(arg2){
        let var2=20;
        let x=20;
        console.log(arg1,var1,arg2,var2,x,y);
        //x ka closure shadowing
        console.log(arguments[0]);
        //argument only covvers current function ka argument
    }

    return inner;
}

let x=outer('param1',11);
//typeof x=='function'
//x==inner
let y=100;
x('param2');