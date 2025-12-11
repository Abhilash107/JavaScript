//^ Promises


//A Promise represents a value that will be available in the future — either resolved (success) or rejected (failure).

// Promise States
// State	            Meaning

// pending	            Initial state
// fulfilled	        Resolved successfully
// rejected             Failed

const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("data received");
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

// Microtask Queue Priority (VERY IMPORTANT)

// Promises run in microtask queue, which runs before macrotask queue (setTimeout).

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Start
// End
// Promise (is executed before setTimeout due to callback in microtask queue)
// Timeout