/**
 * javascript function defined with function keyword
 * follwed by name by parameter
 * 
 * syntax:
 * function name(parameter1,paramter2,parameter3){
 * statement;
 * return variable_name;
 * }
 */

// let a = data1(5, 8, 6);
// console.log(a);
// function data1(x, y, z){
//     return x+y+z;
// }

/**
 * note:
 * if the variable declared inside the function called local variable
 * if the variable declared outside the function called global variable
 */

//local variable
// function example() {
//     let bikename = "ducati";
//     console.log(bikename);

// }
// example();


/**before arrrow function */
let a = data1(5,8,6);
console.log(a);

function data1(x,y,z) {
    return x+y+z;
}

/**
 * after using Arrow function
 */
let data =(a,b,c) => a*b*c;
console.log(data(7, 2, 4));

/** 
 * Arrow function with parameter
 */

let sap = "";
sap=(val) => "java" + val;
console.log(sap("script"));

