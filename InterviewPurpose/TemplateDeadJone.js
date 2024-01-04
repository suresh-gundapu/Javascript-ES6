/**
 * Temporal dead zone behaviour occur when varaibles declared with let and const keywords 
 * It is behaviour where we try to access before intilized  the vraibles with let and const keywords
 * 
 * 
 */

num = 23;// reference error

let num;
function test(){

  console.log(x);// reference error
  let x;
}
test();