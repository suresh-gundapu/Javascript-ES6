// call method is alternative method of calling function and also passed "this' keyword for object and passing additional arguments if any

// the main purpose of call method is when we create function outside of object and we want call that function method of object means we should access properties of that object 
// through the "this" keyword otherwise that this keyword represent global empty object
const person = {
  name:"suresh",
  age:30
}
let sampleCall = function(age){
this.age++;
console.log(`this is additional argument ${age}`)
}
console.log(person.age);

sampleCall.call(person,20);
console.log(person.age);
