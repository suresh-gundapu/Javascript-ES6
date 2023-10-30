//dot notation and [] are used to set or get properties of object

const sampleObj = {}

sampleObj.id = 1;

sampleObj.name = "suresh";

sampleObj.marks = 100;

sampleObj.testFunc =  function(){
  if(this.marks > 50){
    console.log(`${this.name} is passed`);
  }else{
    console.log(`${this.name} is failed`);
  }
}

console.log(sampleObj.name);

sampleObj.testFunc();
