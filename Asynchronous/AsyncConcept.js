/**
 * Javascript is a single threaded :
---------------------------------

=> JS is an always synchronous and single-threaded

=> Every browser has a JS Engine , for example google chrome js engine name is v8.

=> when we write JS code executed by this JS engine and JS engine code executed in baground with another threaded


Synchronous code in Javascript or synchronous model(single threaded):
---------------------------------------------------------------------

-> In synchronous model , a thread is assigned to one task and starts working on it. once task completed only then its availble for next task ..

console.log(before);

setTimeout(function(){
console.log("hi");
},2000)
console.log("after");

expected output :
before 

hi

after

real output :
before
after
hi

Asynchronous code or Asynchronous model:
=======================================

=> when thread assigned to one task , it can hold it and next task will run after that previous task will run 

=> By use of asynchrounous model here js dont waste the time executes the next task while functionalities completed of previous tasks

=> Actual behaviour of JS is asynchronous model but js is single threaded synchronous we said first here i will give explanation

console.log(before);

setTimeout(function(){
console.log("hi");
},2000)
console.log("after");


real output :
before
after
hi


=> JS engine has 3 loops for run what we write the code 

1) callstack:

console.log(before);

2) Event Loop

console.log(before);

console.log("after");
setTimeout(function(){
}searching for event 

3) APIS 

timeOut apis


=> in this loop take intial statement and print if any call back functions is there it push to API and API is push to event loop for related functionalities while this time callstack can print next task without waste the time  thats reason JS behaviour is Asynchronous , these JS engine inner code behaves asynchronous but JS is synchronous and single threaded

 
WHere to used this async model in JS:
--------------------------------------

1) setTImeout, setInterval

2) Ajax

3) event handlers


Async code Drawback:

--------------------

=> async code executes the task holding and continouing without wasting time but in these manner we cant 
controll way of execution the when the task executes for example task1 executes last and second 
task executes first
and difficult to handled debugging process

so we can controll JS introduced some concepts


1) promices

2) generators

3) Async/ Await 


 */