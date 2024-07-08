/*
loops

exit check loop
while(){
    statement;

}

exit check loop
do{
    statement;
}while();

entry controlled loop
for(initialization,condition,inc/dec){
    statement;
}
*/

/*
Conditional statements

simple if
if else
nested if
else if ladder
switch case


*/

let a =25;
if(a > 50) {
    console.log("statement is true");
} else {
    console.log("statement is false");
}



//else if ladder

// let Ticketprice = 130;
// const Ticketprice = prompt("Enter the price:");
// if(Ticketprice>100 && Ticketprice<150){
//     console.log("seat from 1 to 20")
// }else if (Ticketprice>150 && Ticketprice<=200){
//     console.log("seat from 21 to 40");

// }else if (Ticketprice>200 && Ticketprice<=500){
//     console.log("seat from 41 to 60");
// }else {
//     console.log("special cabin");
// }

//nested if else

/*
if(){

}else{

}else{

}
*/
// const age = prompt("Enter your age");
// if(age>10){
//     if(age>18){

//     console.log("can vote");
//  }else {
//     console.log("cannot vote");

//  }

// }else {
//     console.log("entered age is invalid")
// }

//switch case()statement
/*
 syntax:
 switch(){
    case 1:
        Statement;
        break;

     case 2:/    
         Statement;
         break;
         .
         .
         .
     default:
         statement;    

 }
 */

//  const lang = parseInt(prompt("choose the number of lanfguages"));
//  switch(lang){
//     case 1:
//         console.log("selected tamil languages");
//         break;
 

//     case 2:
//          console.log("selected english languages");
//          break;
//     case 2:
//          console.log("selected kanada languages");
//          break;
//     case 3:
//          console.log("selected telugu languages");
//         break;
//     case 4:
//          console.log("selected hindi languages");
//          break;
//     default:
//         console.log("selected hindi language")
// }

//while loop
// let i =prompt("enter the value");
// while(i<6){
//     console.log(i);
//     i++;
// }

//do while()
 let i = prompt ("enter the value");
 do{
    console.log(i);
    i++;
 }while(i<=10);

 //forloop
 let n = prompt("enter the value:");
 for(let i=n; i<20; i++){
    console.log(i);
 }


