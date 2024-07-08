/**
 * destructuring for unpack object to variable
 * syntax:
 * let {data1,data2}= objectname;
 * 
 * destructuring for unpack array and other iterables
 * syntax:
 * let [data1,data2]= objectname;
 */
//object destructing
const laptop = {
    RAM: "DDRS",
    Graphics: "nvidia",
    SSD: 512
};

let {RAM, Graphics} = laptop;
console.log(RAM+" "+Graphics);

//string destructuring
let data = "Javascript";

let[a1, a2, a3, a4, a5] = data;

console.log(a2);

//array destructuring

const electronics = ["aurdino", "Gas sensor", "PH sensor", "Raspberry pi"];

let [data1, data2]= electronics;

console.log(data1+" "+data2);

//destructuring Array position values
const bike = ["TVS","Honda", "KTM", "Java"];

const {[0]:bike1, [1]:bike2} = bike;

console.log(bike1+" "+bike2);

//Array destructuring rest property
const num = [10, 20, 30, 40, 50, 60, 70, 80];

const [a,b, ...rest] = num;

console.log("a is" + a, "b is" +b, "the rest is"+ rest);


//map destructuring
const code = new Map ([
    ["Java", 30000],
    ["Javascript", 1000],
    ["datascience-python", 35000]
]);

let sap = "";
for(const [ key, values] of code) {
    sap += " "+key+ "is" + values;

}

console.log(sap);

//swaping variables

let course1 = "FSD";
let course2 = "DADS";


[course1, course2] = [course2, course1]

console.log(course1+" "+course2);