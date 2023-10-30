// constructor is special function in class
// when object created it automatically calls the class and initialize the properties and methods to class
class Student {
  name;
  age;
  marks;
  constructor(a,b,c){
    this.name = a;
    this.age = b;
    this.marks = c;
  }
}
const sampleObj = new Student("suresh" , 30 ,100);
console.log(sampleObj);

