// it attach the given array to another array or combining two arrays and giving new array

const arr = [
  { id: 1, brand: "samsung", price: 1000 },

  { id: 2, brand: "vivo", price: 2000 },

  { id: 3, brand: "apple", price: 3000 },
];
const arr2 = [
  { id: 4, brand: "samsung", price: 1000 },

  { id: 5, brand: "vivo", price: 2000 },

  { id: 6, brand: "apple", price: 3000 },
];

var arr3 = arr.concat(arr2);
console.log(arr3);