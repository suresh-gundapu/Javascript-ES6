
/*
1)Global scope// we can access variable anywhere in the program 
2)local scope/functional scope / parameter// we can access this within functional scope like arguments
3)block scope/conditional / we can intilize and access within the block scope 

*/
//1)intilization// 

/*
var/let: we can intilize without value declare 
const: we cant access without value decalre 

*/
var x;
console.log('this is var intilization without value declare' + x);
let y;
console.log('this is let intilization without value declare' + y);

// const z;
// console.log('this is const intilization without value declare' + z);// syntax error

//2)reassigning 

/* 
var : it allows reassigning 
let/const: it cant allow the reassigning
*/

var a = 20;
var a = 30;

console.log(a);

//let a = 50 ; // syntax error 

//console.log(a);

let b = 40;
//let b = 50;//syntax error

console.log(b);

const c = 50;
//const c= 60//syntax error

console.log(c);

/*
3) scope level
*/

// example 
var m = 10;
let n = 20;
const o = 30;
function add() {
  var s = 20;
  let t = 60;
  const u = 90;

  if (n < o) {
    var m =10;// in block scope we can reasign variables
    var s =10;// in block scope we can reasign variables
    let t =10;// in block scope we can reasign variables
    const u =10;// in block scope we can reasign variables
    var v = 20;
    let r = 60;
    const q = 90;
    console.log(`this is global var accessing ${(parseInt(m + n + o))}` );
    console.log(`this is local var accessing ` + (parseInt(s + t + u)));
    console.log(`this is block var accessing ${(parseInt(v + r + q))}` );

  }
  console.log(`this is global var accessing ${(parseInt(m + n + o))}` );
  console.log(`this is local var accessing ` + (parseInt(s + t + u)));
  console.log(`this is block var accessing ${(v)}` );// we can access outside block
 // console.log(`this is block var accessing ${(r)}` );//let we cant access outside block reference error
 // console.log(`this is block var accessing ${(q)}` );// const we cant access outside block reference error

}
console.log(`this is global var accessing ${(parseInt(m + n + o))}` );// global scope we can access anywhere
//console.log(`this is local var accessing ` + (parseInt(s + t + u)));// local scope var access within function only reference error
add();









