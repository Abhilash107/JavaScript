const colors = ['red', 'black', 'green']
const numbers = new Array(1, 2, 3, 4)


const mixed = [1, 2, 'red', 3, 4, 'black']

// console.log(typeof(colors));
// console.log(Array.isArray(colors));

// can access, modify and delete


//length
//console.log(mixed.length);


//* .pop() -> removes & returns last element from Array 
const lastElement = mixed.pop()
//console.log(lastElement);
// if Array.length == 0 then returns undefined


//* .push(value1,....,valueN) 
//* -> adds to the end of an isArray
mixed.push('black')



//* .shift() -> removes the first element from an Array
mixed.shift()
//console.log(mixed);
// if Array.length == 0 then returns undefined




//* .unshift(value1, ...., valueN)
//* -> adds element to the beginning pf an Array
mixed.unshift(1)
//console.log(mixed);




//* splice(startInd, deleteIndex, item1, item2)
//* -> 
// const removedNums = numbers.splice(2, 2)
// console.log(removedNums);
numbers.splice(2, 2, 20, 21)
//console.log(numbers);


//* indexOf() -> returns the first occurrence










































