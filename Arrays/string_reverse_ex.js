// first method using predefined functions

const str = "welcome to HB";

var result1 = str.split(' ');

var result2 = result1.reverse();

var result3 = result2.join(" ");

console.log(result3);

// we can use chaining also
console.log(str.split(' ').reverse().join(' '));

// second method without use predefined methods using for-loop
const str2 = "suresh";
var newString = "";
for( var i = str2.length-1; i>=0 ; i--){

   newString = newString +str2[i];
}

console.log(newString);

