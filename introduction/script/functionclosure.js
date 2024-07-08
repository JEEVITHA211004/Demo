// GLobal variable

dataFunction();

function dataFunction() {
    let x = 8; //local variable
    console.log(x * x);
}

let a = 10;
function sapFunction() {
    
}
console.log(a + a);

// counter using global variable

let variable = 0;
 function add() {
    counter += 1;
    //counter = counter+1
    //counter = 0+1=1
    //counter = 1+1=2
    //counter = 2+1=3

 }

 add();

 add();

 add();

 console.log("the counter is" + counter);

 //Nested function
 function add() {
    let counter = 0;
    function plus() {
        counter += 1;
    }
    plus();
    return counter;
 }

 console.log(add());