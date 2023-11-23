// splice method is used to remove particular element from array from start index and can add also at particular position
//arr.splice(startIndex,count) for remove
// arr.splice(index,0, value);
const arr = [
  { id: 1, brand: "samsung", price: 1000 },

  { id: 2, brand: "vivo", price: 2000 },

  { id: 3, brand: "apple", price: 3000 },
];
arr.splice(0,1);//remove

//arr.splice(0,0,{ id: 1, brand: "redme", price: 1000 });// for added

console.log(arr);

