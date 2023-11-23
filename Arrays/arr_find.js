// it same like filter but it gives only first matching element of array on given condition satisfies 

// it same like single row element mainly used for fetching user or any of details based on id 

const arr = [
  { id: 1, brand: "samsung", price: 1000 },
  { id: 2, brand: "vivo", price: 2000 },
  { id: 3, brand: "apple", price: 3000 },  
];

const result = arr.find((eachObj)=>{
    return eachObj.id === 1;
})
console.log(result);
