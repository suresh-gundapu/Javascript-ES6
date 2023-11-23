// string methods 

//1) search
// search() – locate a substring in a string using a regular expression.
// indexOf() – get the index of the first occurrence of a substring in a string.
// lastIndexOf() – find the index of the last occurrence of a substring in a string.
// includes() – check if a string contains a substring.
// startsWith() – check if a string starts with another string.
// endsWith() – determine if a string ends with another string.

let str = "welcome to HB";

console.log(str.includes('to'));//true

const title = 'Jack and Jill Went Up the Hill';

console.log(title.startsWith('Jack'));//true
console.log(title.startsWith('jack'));//false
console.log(title.startsWith('Jill', 9));//true
console.log(title.endsWith('Hill'));//true
// 2. Trimming
// trim() – remove whitespace characters from a string.
// trimStart() – remove the leading whitespace characters of a string.
// trimEnd() – remove the ending whitespace characters of a string.

const str2 = " welcome ";

console.log(str2.trim());

console.log(str2.trimStart());
console.log(str2.trimEnd());

// 3. Extracting
// split() – split a string into an array of substrings.
// substring() – extract a substring from a string.
// slice() – extract a part of a string.

//The substring() method accepts two parameters: startIndexand endIndex:


console.log(str.substring(0,10));
console.log(str.substr(6,5));


//charAt This method returns the character at the specified index. String in JavaScript has zero-based indexing.

console.log(str.charAt(0));
//JavaScript Template Literals In Depth


// At this point, a template literal is just like a better version of a regular JavaScript string. The big difference between a template literal and a regular string is substitutions.

// The substitutions allow you to embed variables and expressions in a string. The JavaScript engine will automatically replace these variables and expressions with their values. This feature is known as string interpolation.

// To instruct JavaScript to substitute a variable and expression, you place the variable and expression in a special block as follows:

// ${variable_name}

let firstName = 'John',
    lastName = 'Doe';

let greeting = `Hi ${firstName}, ${lastName}`;
console.log(greeting); // Hi John, Doe