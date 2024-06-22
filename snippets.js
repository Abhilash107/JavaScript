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
//console.log(arr);



//* Reverse the Array
arr.reverse();
//console.log(arr);



//* Convert to String to Number
const num = parseInt('23')
//console.log(typeof(num));



//* Check if substring
const str = 'Abhilash'
const subStr = 'la'
//console.log(str.includes(subStr));



//* Length of an Object

const info = {
    name: 'Abhi',
    age: 22
}

Object.freeze(info)
info.age = 21 // assigning new values

// console.log(info.age) // getting value
// console.log(Object.keys(info).length) 
// getting length of object


//* Convert object to array
const array = Object.entries(info)
// console.log(array);
// console.log(array[1]);




//* get current URL
const currentUrl = window.location.href
//console.log(currentUrl); //? Error







//*Copy text to clipboard
let text = 'abhilash is a Coder'
//navigator.clipboard.writeText(text)



