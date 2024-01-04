
// A function that passed into another function as argument , and get invoked in that another function 
/**Call back functions are using at setTimeout, setInterval , promices etc..,
 * 
 * 
 */

let finalCall = function (lastName) {
  console.log(`this is final call function ${lastName}`);
}
let callBackFunc = function (firstName, refFunc) {
  console.log('before');
  setTimeout(() => {
    console.log(`this is callBack func ${firstName}`);

  }, 2000)
  finalCall(refFunc);
}
callBackFunc("suresh", "gundapu");
