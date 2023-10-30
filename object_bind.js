//1) the "call" method executes the function immedietly, bind method will not executes the function immedielty.

//2) "call" will not create new function , bind method creates new function 

const student1 = {

  name: "suresh",
  marks: 100,
}

const student2 = {
  name: "sanjay",
  marks: 90
}

const student3 = {
  name: "praveen",
  marks: 80
}

let sampleFunc = function(sub1, sub2, sub3){
  var totalmarks = sub1 + sub2 + sub3;
  console.log(`this is total marks for additional argumnets`);
  console.log(`Hi ${this.name} your total marks is ${totalmarks}}`);
}


var x = sampleFunc.bind(student1);

x(10,20,30);