// freaz object in js

const obj1 = {
  x:100,
  y:"suresh"
}
Object.freeze(obj1);
obj1.x =200;
console.log(obj1.x);

//in js sstring not allow some charecters like special charectors to over come we can keep front of them backword slashes

let s1 = "Javascript\"h";
// let s2 = "javascript"";
console.log(s1);

// if declare 