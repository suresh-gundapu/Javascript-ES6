/**
 * Types of functions :
 * ===================
 * 
 * 1) named function
 * fuction test(){
 * 
 * }
 * 
 * 2) anonymous function 
 * 
 * let func1 = function(){
 * 
 * }
 * 
 * 
 * 3) arrow function :
 * ==================
  Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

let func1 = ()=>{
return 
}

 * 
 * 4) IFFEE:
 * 
 * Immidetley Invoked Function Concept 
  
  -> generally we have 2 types of function
  
  1) Named Function
  
  function test(){
  
  }
  test();
  
  2)Anoumonous function 
  
  var test = function(){
  
  }      
        
  test();
  
 => These 2 types function execute when we call only 
 
 => these functions stored in window object then we can reuse 
 
 
 => iffy functions cant re use and it will execute immidietly and we can pass parameters also
 
 syntax:
 
 (function(parameter){
 
 })(arguments)      
        
        ex: (function(a){
        console.log("hi"+a);
        })(30)
 * 
 */
