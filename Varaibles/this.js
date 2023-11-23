// this keyword represent current object means it can access current object properties and methods

// in function it represents global window object

// in objects it represent curent object

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const obj = {
  name: "suresh",
  getResult: function () {
    return `this is inside obj ` + this; //current object
  },
};
console.log(`this is outside obj` + this); //empty object
let sample = function () {
  console.log(`this is inside function ` + this); // global object
};

sample();
console.log(obj.getResult());
