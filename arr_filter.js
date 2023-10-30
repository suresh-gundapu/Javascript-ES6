// it returns only satisfied condition elements means it iterate each element in array but gives only satisfied condition of element as new array 

// it same like find method but in find method compare and gives for first matching element of array

const arr = [
  { id: 1, brand: "samsung", price: 1000 },
  { id: 2, brand: "vivo", price: 2000 },
  { id: 3, brand: "apple", price: 3000 },  
];

var result = arr.filter((eachObj)=>{

  return eachObj.price > 1000

});
console.log(result);