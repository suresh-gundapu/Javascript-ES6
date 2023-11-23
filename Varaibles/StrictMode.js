/**
 *
 *Strict Mode:
 "use strict" this is the keyword we should decalre top of the script means global scope then all code should executed stricly in this mode

 means in normal without declare var if assign value it will print but in this mode cant accept it will give error

 advantage of this is Strict mode makes it easier to write "secure" JavaScript.
 */
"use strict";
x = 10;
console.log(x); // reference error
function example() {
  "use strict";
  y = 10;
  console.log(y); // reference error
}
example();
