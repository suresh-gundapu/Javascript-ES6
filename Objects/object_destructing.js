// object destructuring means we can separate object properties into individual varables without doing manually
const sampleObj = {
  name: "suresh",
  marks: 70,
  age: 30,
  location: "WGL"
};
// manually doing
var x = sampleObj.name;
console.log(x);

// destructuring 

var {name,marks=90,...others} = sampleObj;

console.log(name);
console.log(marks);
///



