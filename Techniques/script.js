//* Exchange variables

let a = 5
let b = 6;
// ; is necessary
[a, b] = [b, a]
console.log(a, b) // Output: 6 5


//* sort alphabetically

function alphabetically(arr){
    return arr.sort( (a, b) => a.localeCompare(b) )
}

let arr = ['c', 'd', 'a']
const res = alphabetically(arr)
console.log(res);


//* Shorten the console.log
let c = console.log;
c('hello')

//*Closures

function createCounter(){
    let c =0
    return function(){
        return ++c
    }
}

const counter = createCounter()
console.log(counter());
console.log(counter());



