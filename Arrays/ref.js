//* Values & References


//* Arrays
const nums = [1, 2, 3, 4]
const anotherNums = nums
anotherNums.push(10)
console.log(nums);//[ 1, 2, 3, 4, 10 ]
console.log(nums === anotherNums); //true

//*Explanation : 
//* In JavaScript, Arrays are reference types. When you assign nums to anotherNums, both variables refer to the same array in memory. Therefore, any changes made to anotherNums will also affect nums because they both point to the same array object. After anotherNums.push(10);, the array becomes [1, 2, 3, 4, 10], and both nums and anotherNums reflect this change. Since they are both references to the same array object, nums === anotherNums evaluates to true.

//! Imp
//? If you want to create a new array that is a copy of the original array, you can use methods such as slice(), the spread operator (...), or Array.from().
const anotherNums2 = [...nums]
console.log(anotherNums2 === nums);//false









//* Objects
const person = {
    firstName: 'Rick',
    lastName: 'Grimes'  
}

const anotherPerson = person
anotherPerson.lastName = 'cena'

console.log(person === anotherPerson);// true

//*Explanation : 
//* In JavaScript, Objects are reference types, similar to arrays. When you assign person to anotherPerson, both variables refer to the same object in memory. Therefore, any changes made to anotherPerson will also affect person because they both point to the same object. Both person and anotherPerson reflect this change. Since they are both references to the same object, person === anotherPerson evaluates to true.

//! Imp
//?If you want to create a new object that is a copy of the original object, you can use methods such as Object.assign() or the spread operator (...)

const anotherPerson2 = {...person}
console.log(anotherPerson2 === person)// false