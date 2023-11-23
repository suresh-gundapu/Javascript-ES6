// student marks example 

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


sampleFunc.call(student1,10,20,30);