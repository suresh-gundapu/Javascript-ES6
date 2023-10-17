const student = {

  id: 1,
  name: "suresh",
  marks: 10,
  studentMarks: function () {
    if (this.marks > 50) {
      console.log(this.name);
    } else {
      console.log("Failed");
    }
  },
  callBacktest: function () {
    setTimeout(() => {
      if (this.marks > 50) {
        console.log(this.name);
      } else {
        console.log("Failed");
      }
    }, 3000)
  }
}

student.studentMarks();
student.callBacktest();