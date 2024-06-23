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


//* indexOf(data) -> returns the first occurrence
//console.log(numbers.indexOf(21));
// if not found, then returns -1



//* lastIndexOf(data) -> returns last occurrence 
//console.log(numbers.lastIndexOf(2));
// if not found, then returns -1



//* .includes(data)
//console.log(numbers.includes(2));
// Specifying the starting index 
//console.log(numbers.includes(2, 0));





//* .concat(arr1, ...., arrrN) -> merge Arrays 
//* it creates an new Array 
const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 = [5, 6]
const mergedArray = arr1.concat(arr2, arr3)
//console.log(mergedArray);





//* .reverse() -> reverses the Array
arr1.reverse()
//console.log(arr1);



//* .slice() -> extracts a portion of an Array
// creates an copy of specified portion
//no effect on starting index
const slicedArray = arr1.slice(0, 1)
//console.log(slicedArray);






//* .sort() -> sorts the Array
const numArray = [1,5,4,6,7,8]
numArray.sort()
// console.log(numArray);




//* flat() -> creates a new Array with all sub-Array
//* concatenated into it & returns the new Array
const nestedArray = [1, 2, [3, 4], 5, [6]]
const newArray = nestedArray.flat()//def value : 1
const newArrayDepth = nestedArray.flat(Infinity)
// console.log(newArray);
// o/p -> [ 1, 2, 3, 4, 5, 6 ]




//* .toString() -> converts arr to String
const arr4 = [1, 2, 'a', false]
//nested array can also be represented in stringForm.
const stringForm = arr4.toString()
// console.log(stringForm);




//* .join() -> joins all the elements of an array intro a single String
const joinedArr4 = arr4.join('-')
// () ==> separator -> can use anything
//console.log(joinedArr4);





//* ... -> spread operator
   // copying
   // iteration 
   // concatenation

const arr5 = [1, 2, 3, 4, 5 ]
const arr6 = [10, 12, 14, 16,]


const copyArray = [...arr5]
// console.log(arr5 === copyArray);// false

const concatenatedArray = [...arr5, ...arr6]
//console.log(concatenatedArray);









































