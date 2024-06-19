//* date 
const now = new Date()
//console.log(now)

//* Check if Array
let arr = [1, 3, 2, 4, 5, 6]
const res = Array.isArray(arr);
//console.log(res);

//* Merge two Arrays
let arr2 = [9, 8, 7, 6, 5, 4]
const newArr = arr.concat(arr2);
//console.log(newArr);

//* Remove duplicate from the Array
let array3 = [1, 2, 3, 1, 2, 3]
let uniqueArr = [...new Set(array3)]
//console.log(uniqueArr);


//* Sort the Array
arr.sort();
console.log(arr);

//*Copy text to clipboard
let text = 'abhilash is a Coder'
navigator.clipboard.writeText(text)

