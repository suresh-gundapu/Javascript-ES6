// inheritence means when an object can access properties methods  from another object  
class StudentData {
  name;
  email;
  age;
  constructor(a, b, c) {
    this.name = a;
    this.email = b;
    this.age = c;
  }
}

class TeacherData extends StudentData {
  name;
  email;
  age;
  constructor(a, b, c) {
    super(a);
    this.name = a;
    this.email = b;
    this.age = c;
  }
  show() {
    return this.name;
  }
}

const teacherObj = new TeacherData("suresh", "s@yopmail.com", 30);

const studentObj = new StudentData("ramesh", "r@yopmail.com", 30);

console.log(teacherObj);
console.log(studentObj);
console.log(teacherObj.show());