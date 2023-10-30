// for in loop can works on objects only not for arrays 
// it iterates the each element of object per once 

const sampleObj = {
  name: "suresh",
  marks: 70,
  age: 30,
  location: "WGL"
};

for (x in sampleObj) {
  //console.log(x);
  //console.log(sampleObj[x]);
  console.log(`${x} --- ${sampleObj[x]}`);
}
