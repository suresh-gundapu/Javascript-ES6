/**Closures:
 * =========
 *
 *=> It holds variable/function value in Scope chaining

=> Global variable calling anywhere but in functional scope or block scope values cant call outside when calling outside it immidetly going to garbage callections


=> By using this closure concept we can store that values into another store and we can maintain scope chaining outside also  

=> Closures allow
you to access the scope (variables and parameters) of an outer function from an
inner function. Every time a JavaScript function is created, a closure is created.
JavaScript closures allow you to control which variables are and are not in scope in a
given function, as well as which variables are shared among siblings within the same
containing scope.
 *
 *Some time we want secure our reusable code or block dont access outside block or scope or function on that scenarios we go to closers it secure ur code or block 
 *
 * i created function and declared on variable and access to only inside that function and cant access out side function but some time it need to access another 
 * functions so we have to keep that main function return one object in that object variauos function can access declared vraibles or etc..,
 */

 let Student  = function(){

  var a = 10;

  return {

    func1:function(){
      console.log("func1:"+a);
    },

    func2:function(){
      console.log("func2:"+a);
    },

    func3:function(){
      console.log("func3:"+a);
    }
  }
 }

 let s = new Student();
 s.func1();//10
 s.func2();//10
 s.func3();//10

 console.log("outside scope:"+a);//reference error
