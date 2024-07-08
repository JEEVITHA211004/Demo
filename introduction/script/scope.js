/*
note:

 --> before ES6-- introduction in 2015 there is 
 no block scope concept

--> javascript has global scope and function scope

*/

//syntax:
 /*
  {
    variable variable_name = value; //variable(let, const)
  }
  */


var x = 89;
 {
    var x = 55;
    console.log(x);
  }