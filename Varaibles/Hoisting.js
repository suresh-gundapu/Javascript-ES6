/**
 Hoisting:

 => this is works on variables and functions 
 it allows to use functions and variables before declaration of them 

 it is js default behavior moving all declarations of variables and functions to top of the current scope 

 */
console.log(x);
var x = 10; // undefined

console.log(z);
var z; // undefined

//above case hoisting is done that shows undefined but not showing error

b = 5;
console.log(b); //5
var b;

car = "benz";
// const car; // syntax errot script will stop;
console.log(car);

// console.log(y); //reference error

// Hoisting at let and const  is different
console.log(a);
let a;
// Function hoisting in JavaScript
// Function declarations are hoisted, too. Function hoisting allows us to call a function before it is defined. For example, the following code runs successfully and outputs "foo":

foo(); // "foo"

function foo() {
  console.log("foo");
}

//Because of the confusion that var hoisting can create, it's best to avoid using variables before they're declared.
