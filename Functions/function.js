//* In programming, "hoisting" is a behavior in certain languages, most notably JavaScript, where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are actually declared in the code


//* functions declared using function keyword are hoisted to the top of their scope

//basic functions
basicFunction()
function basicFunction(){
    console.log("basic");//follows hoisting
}



//console.log(functionExpression);//undefined
//? anonymous functions 
var functionExpression = function() {
    console.log("Function Expression");
}
console.log(functionExpression);

// console.log(arrowFunction);
//Cannot access 'arrowFunction' before initialization
//? arrow functions
const arrowFunction = () => {
    console.log("Arrow Function");
}
console.log(arrowFunction);



//? function constructor
//console.log(constructorFunction);// undefined
var constructorFunction = new Function('console.log("Function constructor")')
console.log(constructorFunction);

