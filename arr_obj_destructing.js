const arrObj = [
  { name: "suresh", age: 30, place: "warangal" },
  { name: "suresh1", age: 31, place: "warangal1" },
  { name: "suresh2", age: 32, place: "warangal2" },
  { name: "suresh3", age: 33, place: "warangal3" },
];
arrObj.map((eachObj) => {
  const {name,age,place} = eachObj;
  console.log(name);
  console.log(age);
  console.log(place);
});

