//Employees 

class Student { 
  firstName = "Suresh";
  lastName = "Gundapu";
  designation = "Developer";
  salary = 50000;
   getFUllName = function(){
    console.log(`hi ${this.firstName}-${this.lastName}`);
  }
  getPromote = function(){
    var isEligibleForPromotion;
    if(this.designation == "Developer"){
      if(this.salary > 40000){
        isEligibleForPromotion = true;
      }else{
        isEligibleForPromotion = false;
      }
      return isEligibleForPromotion;
    }

  }
}

const sampleObj = new Student();
if(sampleObj.getPromote() == true){
  sampleObj.designation = "Sr Developer";
  sampleObj.salary = sampleObj.salary + (sampleObj.salary*10/100);
}
sampleObj.getFUllName();
console.log(sampleObj);