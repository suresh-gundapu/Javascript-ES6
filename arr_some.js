// it gives true when given condition is satisfied on at least one element

const arr = [
  { id: 1, brand: "samsung", price: 1000 },
  { id: 2, brand: "vivo", price: 2000 },
  { id: 3, brand: "apple", price: 3000 },  
];

let result  = arr.some((eachObj) => {
  return (eachObj.price > 2000);
});
console.log(result);



