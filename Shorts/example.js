// freaz object in js

const obj1 = {
  x: 100,
  y: "suresh",
};
Object.freeze(obj1);
obj1.x = 200;
console.log(obj1.x);

//in js sstring not allow some charecters like special charectors to over come we can keep front of them backword slashes

let s1 = 'Javascript"h';
// let s2 = "javascript"";
console.log(s1);

// if declare

// find max or min value from array

const arr = [20, 30, 40, 50, 60, 20];

const maxArr = Math.max(...arr);

console.log(maxArr);

const minArr = Math.min(...arr);

console.log(minArr);

let maximum = arr[0];
let minimum = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (maximum < arr[i]) {
    maximum = arr[i];
  } else {
    minimum = arr[i];
  }
}
let result = [maximum, minimum];
console.log(result);

// remove duplicate from array
const arr1 = [1, 2, 3, 4, 1];

const arrDup = arr1.filter((item, index, inputArr) => {
  return inputArr.indexOf(item) == index;
});
console.log(arrDup);

/// find of sum of numbers in array

const arrSum = [1, 2, 3, 1, 8, 6];

const resultSum = arrSum.reduce((x, y) => {
  return x + y;
});
console.log(resultSum);

let sumTemp = 0;
for (let i = 0; i < arrSum.length; i++) {
  sumTemp = sumTemp + arrSum[i];
}
console.log(sumTemp);
