const jsonObj ={
  "name":"suresh",
  "age":20,
  "designation":"developer"
}

const objJavascript = {
  name:"suresh",
  age:20,
  designation:"developer"
}
console.log(JSON.parse(jsonObj));//converting json to javascript objects
console.log(JSON.stringify(objJavascript));// converting javascript object to JSON