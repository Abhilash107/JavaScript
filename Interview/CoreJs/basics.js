var a = 20
let b = 30
const c = 40

let age = 23
const res = age > 18 ? "Adult" : "Minor"
// console.log(res);

//&Datatype
// 1. Primitive (Stored by Value)
let num1 = 10.3, num2 = 20
//console.log(num1, num2);

let x;//undefined
let y = null// null

const bigInt = 123n//bigInt

let sym = Symbol("id")

// 2. Non-Primitive (Stored by Reference)
//object
const obj = {
    name: "A",
    "a" : a// a= 20
}

//console.log(obj);//{ name: 'A', a: 20 }

//&Array
const arr1 = [1,2,3,4]
arr1[0] = 9
//console.log(arr1);//[9,2,3,4]

//&Functions
function foo(){
    return 'Hello';
}
//console.log(foo());

const add = function(a, b){
    return a + b
}
// console.log(add());//Nan
// console.log(add(2, 3));//5

//Arrow back function
const add2 = (a, b)=> a + b;

//anonymous function
// setTimeout(function() {
//     console.log("Hello");
// }, 1000);


// *imp
const obj2 = {
    fn1 : foo(),
    fn2: add(1,2)
}
//console.log(obj2);//{ fn1: 'Hello', fn2: 3 }

//Add a semicolon BEFORE the IIFE:

;(function(){
    console.log('Runs immediately');   
})();

//&Control statements

if(10 < 'j')
    console.log('hehe');
else
    console.log('Nope');
// In JavaScript, when you use a relational operator (<, >, <=, >=) between different data types, JavaScript performs type coercion to numbers.   

// So internally, this happens:

// 1️⃣ 'j' is converted to a number
// Number('j') → NaN


// Because 'j' is not a numeric string, it becomes:

// NaN (Not a Number)

// 2️⃣ Now the comparison becomes:
// 10 < NaN

//! 3️⃣ Any comparison with NaN is ALWAYS false

// This is a strict JavaScript rule:

// 10 < NaN     → false
// 10 > NaN     → false
// 10 == NaN    → false
// NaN == NaN   → false

//&Loops

// for(let i = 0;i < 10;i++)console.log(i);

// let j = 1
// while (j != 10) {
//     console.log(j++);
// }
