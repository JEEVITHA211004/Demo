/*
Arithmetic operators
assignment operators
comparison operators
string operators
logical operators
bitwise operators
ternary operators
type operators


*/
/*
Arithmetic -- +, -, *, /, %, ++ --->Increment, -- Decrement operators
*/

a = 8;
b = 6;
c = a++ + b++ - --b + b++ - --a + ++a;
console.log(a);
console.log(b);

// comparison operators-- >, <, --, ---, !-,!--, >-, <-
  
a = 10
b = 10;
if(a==b){
    console.log("true");
} else {
    console.log("false");
}

/*
Assignment operators

=, +=, -=, *=, /=, %=, **=
*/
 // ternary operators-- ?
   a = 5;
   b = 8;
   a+=b;
   console.log(a);

   /*
        logical operators-- &&, ||, !

   */

 // String Operators----uses ASCII Values to compare

 let data1= "A";
 let data2= "B";
 let res = data1 < data2;
 console.log(res);
 
 // string addition(concatenation)

let sap1 = "java";
let sap2 = "script";
let sap3 = sap1 +" "+sap2;
console.log(sap3);

//Bitwise operators
/* &, |, ~, ^, >>, <<, >>> */




