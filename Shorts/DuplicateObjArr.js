// remove duplicate arrays from object

let product = [
  {id:1,name:"samsung"},
  {id:1,name:"samsung"},
  {id:2,name:"suresh"}

];

let uniqueArr = [];

 let uniqueProducts = product.filter((p)=>{
 if(uniqueArr.includes(p.id)){
    return false;
  }else{
    uniqueArr.push(p.id);
    return  true;
  }
});
console.log(uniqueProducts);
