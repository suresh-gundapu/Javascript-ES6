// this keyword represent current object means it can access current object properties and methods 

// in function it represents global window object

// in objects it represent curent object 

const obj = {

  name:"suresh",
  getResult:function(){
    return `this is inside obj `+this;//current object

  }
}
console.log(`this is outside obj`+this);//empty object
let sample = function(){
  console.log(`this is inside function `+this);// global object
}

sample();
console.log(obj.getResult());


