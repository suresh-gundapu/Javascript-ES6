//it convert string to array based on single parameter character which you want split string

// it returns array


const str = "Welcome to HB";

var result  = str.split('');// every character  convert to array element
console.log(result);

var result2 = str.split(' '); // take space means every word convert to array element
console.log(result2);


const str2 = "Welcome-to-HB"; 

var result3 = str2.split('-');

console.log(result3);
