// it returns true if all elements need to satisfy for given condition 
// this scenario is used at all conditions need satisfy
const arr = [
  { id: 1, brand: "samsung", price: 1000 },
  { id: 2, brand: "vivo", price: 2000 },
  { id: 3, brand: "apple", price: 3000 },  
];

let result = arr.every((eachObj)=>{
  return (eachObj.price > 900);
});
console.log(result);//true because all are greater than 900

