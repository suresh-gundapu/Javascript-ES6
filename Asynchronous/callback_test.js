
// A function that passed into another function as argument , and get invoked in that another function 

let finalCall = function (lastName) {
  console.log(`this is final call function ${lastName}`);
}
let callBackFunc = function (firstName, refFunc) {
  setTimeout(() => {
    console.log(`this is callBack func ${firstName}`);

  }, 2000)
  finalCall(refFunc);
}
callBackFunc("suresh", "gundapu");
