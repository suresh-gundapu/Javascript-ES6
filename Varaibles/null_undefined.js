var a = null;
var b = undefined;


if (a == b) {
  console.log(`this is true`);

} else if (a === b) {
  console.log(`this is false`);
}

console.log(`the data type of null is `+typeof(null));
console.log(`the data type of undefined is `+typeof(undefined));

// null and undefined equally is true means both value is eaqual but when comapre their data type is defferent