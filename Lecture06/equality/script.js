// use mdn usme mast table h
console.log(1=='1') //true
console.log(1==='1');//false

//pecullar cases

console.log(0=='')  //true because number('')=0
console.log(false =='false') //false

console.log('\n'== 0) //true
console.log('\t'== 0 )//true
console.log('\n'=='\t') //false

// this doesn't hold good for abstract equality 
// a = b,  b = c  ... not implies that .. a = c  //non transitive

console.log([1,2]==[1,2]) //false

//objects and arrays etc are passed by ref
//primitive by value similar to java

//here we check the reference so if totally same object toh hi same ayega


//link:-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness