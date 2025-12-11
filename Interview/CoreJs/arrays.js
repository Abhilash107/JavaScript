
//Arrays & Objects
let arr = [1,2,3,4]

arr.push(5)
//console.log(arr)

//console.log(arr.length);

arr.pop()
//console.log(arr)

arr.unshift(10); // [10,1,2,3,4,5]
//console.log(arr)

arr.shift(); // [1,2,3,4,5]
//console.log(arr)

//* imp
arr.length = 0// empties the array
//console.log(arr)


arr = [1,2,3,4,5]
console.log(arr)

//*imp
console.log(arr.slice(1,3));//[2, 3]
//Does NOT modify original , returns new arr
// extracts index 1 to 2


//arr.splice(1, 2)//Removes 2 elements from index 1
// Modifies original
//console.log(arr)//[ 1, 4, 5 ]

console.log(arr.indexOf(3));//2

console.log(arr.includes(4));// true / false

console.log(arr.find(x => x > 4))//retunr thr first true value
console.log(arr.find(x => x > 9))//undefined if not found

//Transformation Methods (VERY IMPORTANT)

//map() => Modifies EACH element (returns new array)
const newArr = arr.map(x => x * 2)
console.log(newArr);

//filter() -> Keeps matching values
const even = arr.filter(x => x % 2 === 0);

//reduce() → Combines all values into one
const sum = arr.reduce((acc, cur) => acc + cur, 0);

//Sorting
arr.sort()//lexical sort
//console.log(arr);

arr.sort((a, b) => a - b)//ascending
//console.log(arr);
arr.sort((a, b) => b - a)//descending
//console.log(arr);

//reverse
arr.reverse()

//Joining & Splitting
let newStr = arr.join("-")//into a string
console.log(typeof newStr);

const newArr1 = "a,b,c".split(",");
console.log(newArr1);//[ 'a', 'b', 'c' ]

//Concatenation & Copy

const newArr2 = newArr1.concat([10, 20])
console.log(newArr2);//[ 'a', 'b', 'c', 10, 20 ]

const copy = [...newArr2]
console.log(copy);
copy[0] = 9
console.log(copy, newArr2);//[ 9, 'b', 'c', 10, 20 ] [ 'a', 'b', 'c', 10, 20 ]
// no change in parent 

// Checking Array Type
console.log(Array.isArray(arr));


let newArr3 = Array.from("ABC");   // ["A","B","C"]
console.log(newArr3);


//delete arr[2]; // Leaves undefined hole

//Use splice() instead.



//^ Objects
