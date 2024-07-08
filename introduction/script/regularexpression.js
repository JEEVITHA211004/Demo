/**
 * syntax
 * /pattern/modifier(s);
 */

let data = "browse chatgpt";
let pattern = /openai.com/i;
let result = data.match(pattern);

console.log(result);


/**
 * modifiers used
 * 1. /g-->perform a global match(finad all)
 * 2. /i-->perform case-insensitive matching
 * 3. /m-->perform multiline matching
 */


/**
 * Brackets
 * 1. [abc]-->find any character between the brackets
 * 2.[^abc]-->find any character not between the chracter
 * 3.[0-9]-->find any character between the brackets(any
 * 4.[^0-9]-->find any character not bertween the brackets
 * 5.(x|y)-->find any of the alternatives specified
 */

let info = "javascript code with java name";
let pattern1 = /[v]/g;
let result1 = info.match(pattern1);

console.log(result1);

//[^abc]
let info1 = "javascript language with initial as java name";
let pattern2 = /[^a]/g;
let result2 = info1.match(pattern2);

console.log(result2);

//[0-9]
let num = "683475625685"
let pattern4 = /[1-5]/g;
let result4 = num.match.match(pattern4);

console.log(result4);

