/**
 * Rest operator:
 * =============
 * -> it works and better management of function parameter 
 * 
 * -> some times we need send more arguments to function calling portion , manually we take paramters from function paranthesis but if more paramters then occur 
 * problem so to overcome this we can use rest operator 
 * 
 * -> it indicates with 3 dots (...)
 * 
 * -> It should always call after declare last parameter of function or dont declare any parameter after rest parameter
 * 
 * -> rest parameter contains group of parameters means it stores paramters in array  
 * 
 * Spread operator:
 * ================
 * 
 * -> Spread operator syntax identically same as rest operators indicates with 3 dots (...)
 * 
 * -> Spread operator used to spread object literals and arrays
 * 
 * -> It is used to quickly copy of all or part of existing array or objects into another array or object 
 * 
 * -> It often used with destructuring concept
 * 
 * -> Spread operator spread arrays or object into another array or object
 * 
 * 
 * Destructuring :
 * ==============
 * -> The destructuring concepts used with objects 
 * 
 * -> Generally if we convert object properties into seperate variables we can do it by manually it will take some time 
 * 
 * -> In destructuring without doing manually we can copy object properties into individual variabls very easily
 * 
 * -> var obj = {x:fn,y:ln,email:"",...};

-> it assigning each object property value into respective variable.

-> order of property is doesnt matter

-> if the variable name same as property name , writing :variableName is optional 

-> Default values can be specified ., propertyName : varblename=defualt value

-> the rest operator (...) represents all remaining properties that are not assigned into any variable ..

 * 
 * Destructing functions parameters :
=================================

=> it is mainly used for sending set of arguments as object to function and accessing easily in function body 

let fun_name = function ({property1:sn,property2:en,...others}){
console.log(sn)
console.log(others);
}
let var1 = {property1:"value",property:"value2",city:"hyd" , state:"sdff"};

fun_name(var1);

 * 
 */

//rest operator examples

let fun1 = function (par1, ...other) {
  console.log(par1);
  console.log(other);
};
fun1(1, 2, 3);

// sum of numbers using rest params

let sumFunc = function (...all) {
  let sumResult = 0;
  let summArr = all;
  for (let i = 0; i < summArr.length; i++) {
    sumResult = sumResult + summArr[i];
  }
  console.log(sumResult);
};
sumFunc(1, 2, 3, 4); //10
sumFunc(1, 2, 3, 4, 1); //11

// Spread Operator

var arr1 = [1, 2, 3, 4];

var arr2 = [1, 2, 3, 4];

var resultArr = [...arr1, ...arr2];

console.log(resultArr);

var obj1 = {
  x: "s1",
  x2: "s2",
};
var obj2 = {
  x3: "s1",
  x4: "s2",
};
var resultObj = { ...obj1, ...obj2 };

console.log(resultObj);

let fun_name = function ({ property1: sn, property2: en, ...others }) {
  console.log(sn);
  console.log(others);
};
let var1 = {
  property1: "value",
  property: "value2",
  city: "hyd",
  state: "sdff",
};

fun_name(var1);
