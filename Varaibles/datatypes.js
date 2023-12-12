/**
 * 
 * Data types:
 * ===========
 * 
 * type variables JS is loosely coupled language we can store any type of values in varaibles 
 * 
 * Premitive Data types:
 * ====================
 * 1)strings
 * 2)numbers
 * 3)bigint
 * 4)boolean
 * 5)undefined 
 * 6)null
 * 7)arrays
 * 8)object
 * 


 */

// * in js if add one number with string , js looking left to right side and treat number as string means it concontication

var x = 16 + "hi";
console.log(x); //16hi

// * in js if substract one number with string , js looking left to right side and treat number as number if string it declare NAN

var y = 16 - "hi";

console.log(y); // NAN

var z = "hi" + 56;

console.log(z); //hi56
var a = "hi" + 56 + 99;

console.log(a); //hi5699

var c = 56 + 99 + "hi";

console.log(c); //155hi
