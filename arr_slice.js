// it is used to select the elements for particular positions from start index to last index , last index wont include it is an argument
// arr.slice(startIndex,endIndex);

// it returns new array

const arr = [
  { id: 1, brand: "samsung", price: 1000 },

  { id: 2, brand: "vivo", price: 2000 },

  { id: 3, brand: "apple", price: 3000 },
];
const arr2 = [40,30,90];
const result = arr.slice(1,2);

console.log(result);