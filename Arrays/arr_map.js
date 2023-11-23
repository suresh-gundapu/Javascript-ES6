// this function executes each element of array per once 

// it returns the new array 

// it can possible with chaining 

// it is also same as foreach but difference is return new array

const arr = [
  { id: 1, brand: "samsung", price: 1000 },
  { id: 2, brand: "vivo", price: 2000 },
  { id: 3, brand: "apple", price: 3000 },  
]; 

// let result = arr.map((eachObj)=>{
//   return eachObj.price*2;
// });

// console.log(result);[2000,4000,6000];


let result = arr.map((eachObj,index)=>{
  return arr[index].price = eachObj.price*2
});
console.log(arr);
console.log(result);