// foreach is same like map element but difference is it not return any new array

// it iterates each element of array per once or it executes function once for each element of the array

// it is used at scenario which we want apply condition on each single element and return that result only 

// the result we can use with in that loop 

// chaining is possible with map method like reduce(),reverse(), sort,find,filter etc., with forEach cant 

const arr = [
  { id: 1, brand: "samsung", price: 1000 },
  { id: 2, brand: "vivo", price: 2000 },
  { id: 3, brand: "apple", price: 3000 },  
]; 

//  arr.forEach((eachObj)=>{
//   console.log(eachObj.price * 2);
// });
//output://2000
//4000
//6000
arr.forEach((eachObj,index)=>{
  arr[index].price = eachObj.price * 2
});
console.log(arr);

const arr2 = [1,2,3,4];

// arr2.forEach((eachObj)=>{
//   console.log(eachObj*2);
// });

arr2.forEach((eachObj,index)=>{
  
arr2[index] = eachObj *2 ;
});
console.log(arr2);





