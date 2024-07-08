//variable creation
// let cpu = "to code";

// cpu = {board: "motherboard",RAM: "DDR4", core: "Intel"};//object liternal
// console.log("the parts in cpu"+" "+cpu.board);

/* 
notes
->define object in javascriopt:
   using an object literal
   using "new" keyword
   using an object constructor
*/

// cpu = {board: "motherboard",
//         RAM: "DDR4",
//         core: "Intel"
// };

// cpu = {};
// cpu.board = "motherboard";
// cpu.RAM = "DDR4";
// cpu.core = "Intel";

// let cpu = new Object();
// cpu.board = "motherboard";
// cpu.RAM = "DDR4";
// cpu.Core + "Intel";

//accesing object properties
// console.log(cpu.board);
// console.log(cpu["RAM"]);

/* 
adding object properties
*/
// cpu.Graphiccard = "Nvidia";
// console.log(cpu.Graphiccard);

//deleting properties
// delete cpu.Graphiccard;
// console.log(cpu.Graphiccard);

//nested object

//function invocation
cpu = {board: "motherboard",
        RAM: "DDR4",
        core: "Intel",    
        fullsetup:function() {
                return this.core+" "+this.RAM+" "+this.board;
        }                                                                                                     
        // system: {
        //         s1: "Dell",
        //         s2: "HP",
        //         s3: "ROG"
        // }
};
console.log(cpu.fullsetup());
console.log(cpu.system.s2);


/*
object constructor functions
-> create many objects of same type
--> to create object type use an object constructor function
-->name constructor function with first letter upper case
*/

//constructor function for system object
// function System (board, RAM, core, graphics) {
//         this.board = board;
//         this.RAM = RAM;
//         this.core = core;
//         this.graphics = graphics;
//         // this.fullsetup = function() {
//         //         return this.board;
//         // }
// } 
// //create a system object
// let cpu = new System("MotherBoard", "DDR4", "Intel", "Nvidia");

// System.prototype.changeGraphics = function(graphicsname) {
//         this.graphics = graphicsname;
// }

// cpu.changeGraphics("AMD");
// // console.log(cpu.board+" "+cpu.RAM+" "+cpu.core+" "+cpu.graphics);
// console.log(cpu.graphics);

//javascript accessors getters and setters
/*
-->lang() property used to get language property
*/


// getters--get()-->read
// cpu = {
//                 board: "motherboard",
//                 RAM: "DDR4",
//                 core: "Intel", 
//                 get MB() {
//                         return this.board;
//                 }   
//        };
// console.log(cpu.MB);


// cpu = {
//                 board: "motherboard",
//                 RAM: "DDR4",
//                 core: "Intel", 
//                 set MB(value) {
//                       this.core = value;
//                 }   
//        };

// //set property
// cpu.MB = "AMD Ryzen";
// console.log(cpu.core);

// getters--get()-->read
// cpu = {
//                 board: "motherboard",
//                 RAM: "DDR4",
//                 core: "Intel", 
//                 get MB() {
//                         return this.board.toUpperCase();
//                 }   
//        };
// console.log(cpu.MB);



//counter object defined property
// let ar1 ={counter : 0};
// Object.defineProperty(ar1, "reset", {
//         get: function(value) {this.counter = 0}
// });
// Object.defineProperty(ar1, "increment", {
//         get: function(value) {this.counter++}
// });
// Object.defineProperty(ar1, "decrement", {
//         get: function(value) {this.counter--}
// });
// Object.defineProperty(ar1, "add", {
//         set: function(value) {this.counter+=value}
// });
// Object.defineProperty(ar1, "sub", {
//         set: function(value) {this.counter-=value}
// });
// ar1.reset;
// ar1.add = 8;
// ar1.sub = 5;
// ar1.increment;
// ar1.decrement;
// console.log(ar1.counter);

