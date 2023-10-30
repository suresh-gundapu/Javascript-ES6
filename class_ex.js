// class is model of object
// object can create based on classes
// class is blue print for objects 

// An object can create by "new" keyword based on  properties and methods that are defined in class

class Student{
  name="suresh";
  age = 30;
  location = "warangal";
  sampleFunc  = function(){
      console.log(this.name);
  }
}
let sampleObj = new Student();
sampleObj.sampleFunc();

console.log(sampleObj.age);

sampleObj.email = "suresh@yopmail.com";

console.log(sampleObj);

