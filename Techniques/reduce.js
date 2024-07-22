const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//* currentValue is iterated,
//* accumulator default value is 0
console.log(sum)