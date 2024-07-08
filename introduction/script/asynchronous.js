function dataDisplay(data) {
    console.log(data1);

}
function firstData() {
    dataDisplay("Info to display");
    
}
function secondData() {
    dataDisplay("Thanks & regard");
}
firstData();
secondData();

//callback function
function bike (sap){
    console.log(sap);
}
function BikeCalculate(num1,num2,myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
BikeCalculate(5, 6, bike);

// promises

function movie(sap1) {
    console.log(sap1);
}

let myPromise = new Promise(function(myResolve,myReject){
    let y = 0;

    if(y == 0) {
        myResolve("Accepted");
    }else{
        myReject("Error");
    }

});
myPromise.then(
    function(value) {movie(value);},
    function(error) {movie(error);}
);

//Async/await
// async
function  genre(sap2) {
    console.log(sap2);
}
async function genrename() {
    return "action";
}

genrename.then(
    function(value) {genre(value);},
    function(error) {genre(error);}
);

//Await

async function infoDisplay(){
    let dataPromise = new Promise(function(resolve,reject) {
        resolve("Full Stack Development")
    });
    console.log(await infoDisplay);
}
infoDisplay();

