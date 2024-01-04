// it is used to minimum or maximum or total or sum of array calculations 

// it is used at single result scenarios in arrays

//arr.reduce(callback(accumulator, currentValue), initialValue)

const arr  = [40,30,60,90];

var result  = arr.reduce((x,y)=>{
  return x>y;
});
console.log(result);

//

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// function that subtracts all array elements from given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500
// let remaining = expenses.reduce(
//   (accumulator, currentValue) => accumulator - currentValue,
//   salary
// );
//console.log(remaining); // 2700


let remaining = expenses.reduce((x,y)=>{
return (x-y);
},salary);

console.log(remaining);