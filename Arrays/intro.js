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
   
   
   
//1. copying
const arr5 = [1, 2, 3, 4, 5 ]
const arr6 = [10, 12, 14, 16,]

const copyArray = [...arr5]
// console.log(arr5 === copyArray);// false


//2. concatenation
const concatenatedArray = [...arr5, ...arr6]
//console.log(concatenatedArray);

const arr7 = [...arr6, 90]
//console.log(arr7);



//3. iteration 
const nums = [1, 2, 3]

function sum(a, b, c){
   return a + b + c
}
const res = sum(...nums)
//console.log(res);


const maxNum = Math.max(...nums)
// console.log(maxNum);




//* Destructuring Array

const array = [1, 2, 3, 4]
const[a, b, c, d] = array
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// we can skip the elements
const [A, , C]= array
// console.log(A);
// console.log(C);

const arr8 = [1, 2, 3, 4, 5]
const [first, second, ...rest] = arr8
// console.log(first);//1
// console.log(second);//2
// console.log(rest);// [3, 4, 5]




//* for...of loop -> in Objects

for (const element of arr8) {
   //console.log(element);
}




//*forEach() method -> built-in array method

arr8.forEach( (key) =>{
   //console.log(key);
} )





//* .map(callback) -> creates a new array by 
//*  applying function each element
//* doesn't change the original array

const arr9 = [1, 2, 3, 4]
const doubled = arr9.map( (num) => num * 2 )
//console.log(doubled);





//* .filter(callback) -> creates a new array
//*  returns the new array containing only the
//*  elements of org array that satisfy the
//*  condition specified in the callback function
    //? All values
const evenNums = arr9.filter((num) => num % 2 === 0 )
console.log(evenNums);// [ 2, 4 ]

;






//* .some(callback) -> checks whether at least one element in the array passes the checks
//* returns true, else false
//* doesn't change the original Array
   //? Boolean value
const arr10 = [1, 2, 3, 4, 5]
const hasEven = arr10.some( (num) => num > 10 )
// console.log(hasEven);




//* .find(callback) -> returns the first element
//* that satisfies the callback
   //? first value
const found = arr10.find( (num) => num <= 3 )
console.log(found);// 1, as it returns the first element

const index = arr10.findIndex((num) => num <= 3  )
console.log(index)// find index of find() result































