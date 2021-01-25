//a function ccan hold an object too as it inherit from it

let str="Asdasd";                 //3 levels from null 
let num=233;                       // 3 levels from null
let bool=true;                      //3 levels from null

let arr=[246,436,6,346];            //3 levels from null

let obj={                           //2 levels from null
    a:10,
    b:'sudh',
}

let fun=function(){                  //3 levels from null
    console.log('Yay!');
}

// if x and y are not primitive 
// x == y : true <- what does this mean ? 
// this means they are reference to the same object in memory 


// String -->                                                       3 levels
// Number  -->                                                      3 levels
// Boolean -->   All functions (not variable of that kind)          3 levels
// Array  -->                                                       3 levels
// Object -->                                                       3 levels

//prototype gives Identity of that type
//yaha Object ek function h uska proto function->object->null 
//Object.__proto__.__proto__==Object.prototype   -->to test your understanding
//Object.__proto__==Function.__proto__

console.log('======= types =======')
console.log('typeof String', typeof String)
console.log('typeof Boolean', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array', typeof Array)
console.log('typeof Object', typeof Object)
console.log('typeof Function', typeof Function)


console.log('======= proto chain =======')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)


// Everything indirectly inherits from the same thing
// that obj is inherited from 
// i.e. in Javascript, everything is essentially an Object


//sab function h sabme prototype h wo uska id 
console.log('======= prototypes ======= ')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)

// String.prototype inherits from Object.prototype

// typeof Object.create(Boolean.prototype) -> ??
//type hoga object hi proto Boolean

console.log(str.charAt(4))
console.log(typeof str.charAt) // ? 
let str2 = "dgndgn"
console.log(str.charAt == str2.charAt) // true
//matlab ah rha same jagah se h

str.charAt = function () { return 'X' } // does not make a difference (ek level andar jao u know how to check now)
// (wo smart h yaha se changes nhi karega)
//this correct

String.prototype.charAt = function () { return 'X' }
console.log(str.charAt(1))

// String.prototype contains all default string functions
// like charAt, indexOf, substring, slice etc 


Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join = function () {
    console.log('join called on', this)
    return this.joinOriginal('/')  //ese kyu spread kiya h we will learn
}



/**
 * Array.prototype 
 * {
 *  .... 
 *  joinOriginal: function () {}, //wo pehle wala join
 *  join: function () { our fun },
 *  ....
 * }
 */

 