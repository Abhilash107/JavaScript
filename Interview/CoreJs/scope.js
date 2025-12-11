
// 8️⃣ Callbacks, Promises & async/await
// ✅ Callback
// setTimeout(() => {
//     console.log("Done");
// }, 1000);

// ✅ Promise
// const p = new Promise((res, rej) => res(10));
// p.then(data => console.log(data));

// ✅ async / await
// async function getData() {
//     const data = await fetchData();
//     return data;
// }

// 9️⃣ Callback Hell (Anti-Pattern)
// a(() => {
//     b(() => {
//         c(() => {});
//     });
// });


// ✅ Solved using Promises & async/await.


//Var
// console.log(a);   // undefined (NOT error)
// var a = 10;
// console.log(a);   // 10

//* Why?
// var a is hoisted to the top and initialized with undefined.

// let
// console.log(b);//ReferenceError: Cannot access 'b' before initialization

// let b = 20;
// console.log(b);
//* Why?

// let b is hoisted, but NOT initialized

// Before initialization, \
// b is in the Temporal Dead Zone (TDZ)


// const
// console.log(b);//ReferenceError: b is not defined
// const c = 20;
// console.log(c);

function test() {
    console.log(a);  // undefined
    // console.log(b);  // ReferenceError
    // console.log(c);  // ReferenceError

    var a = 1;
    let b = 2;
    const c = 3;

    console.log(a);  // 1
    console.log(b);  // 2
    console.log(c);  // 3
}
//test();


//& What is Lexical Scope?

// Lexical Scope means:
// A variable’s visibility is determined by where it is written in the code, not where it is called from.
// JavaScript creates scope chains based on the physical code structure.


function outer() {
    let x = 10;

    function inner() {
        console.log(x);  // accessible
    }

    inner();
}

outer();
//This is lexical (static) scoping.

//^ What is a Closure?
// A closure is formed when:
// An inner function remembers and accesses variables from its outer function even after the outer function has returned.
// This is the key point that interviewers expect.

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3

// Why does this work?
// Even though outer() has finished executing:
// the variable count still lives
// because inner() has a closure over count
// This is the core magic of closures.