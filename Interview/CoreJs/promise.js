//^ Promises

//A Promise represents a value that will be available in the future — either resolved (success) or rejected (failure).

// Promise States
// State	            Meaning

// pending	            Initial state
// fulfilled	        Resolved successfully
// rejected             Failed

//resolve() is a function used inside a Promise to mark it as fulfilled and return a value to the .then() handler. It is called when an asynchronous operation completes successfully.
//reject() does the opposite.
// Change the Promise state from pending → rejected and send the error to .catch()

//^ Promise Constructor Internals

// A Promise takes one argument: an executor function.

// new Promise((resolve, reject) => {
    // async task here
// });


const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("data received");//Change the Promise state from pending → fulfilled and send a value to .then()
    }, 2000);
});

// p.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })

//Promise.all()
//Waits for all promises (fails if one fails)
// Promise.any()
// First successful result

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

fetchData()
  .then(result => console.log(result));

//using reject()
function fetchError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network error");
        }, 1000);
    });
}

fetchError()
  .catch(err => console.log(err));





//^ Microtask Queue Priority (VERY IMPORTANT)
// Promises run in microtask queue, which runs before macrotask queue (setTimeout).

//Ex
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Start
// End
// Promise (is executed before setTimeout due to callback in microtask queue)
// Timeout