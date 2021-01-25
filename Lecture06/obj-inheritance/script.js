//create object and = are different
// object.create(OBJ2) a new copy with data of previous as prototype
//prototype go to that address and read data (data read kind of pass by ref)
//whereas writing something will create a key in that object
//never to use __proto__ in any code it just for learning




let obj1={
    a:10,
    b:20,
    c:30
}

let obj2=Object.create(obj1);
//obj2.__proto__==obj1   -->true
obj2.p='sjkd';
obj2.q='sjhdg';
obj2.r='sssdv';

let obj3=Object.create(obj2);
obj1.a++;
//all proto get updated
obj2.a++;
//obj2.a=obj2.a+1;
//create a key for that object only

//proto ke upar proto ke upar proto ................null

// obj3.__proto__ == obj2
// obj3.__proto__.__proto__ == obj1
//it will try to find in prooto if not found inside proto matlab start seh
/* 
    obj2.a -> it will try to find a in obj2
        -> if not found, 
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on... 
        -> till .__proto__ becomes null
*/



