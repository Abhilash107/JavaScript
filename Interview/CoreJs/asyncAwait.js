// async / await

// async/await is syntactic sugar over Promises that allows writing asynchronous code in a synchronous style.


const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("data received");
    }, 2000);
});


//using async/await
async function run(){
    try {
        const data = await p;
    } catch (error) {
        console.log(error);
    }
}

run();

//example 2
function a() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("A completed");
            resolve();
        }, 1000);
    })
}

function b() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("B completed");
            resolve();
        }, 1000);
    })
}

function c() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("C completed");
            resolve();
        }, 1000);
    })
}

function d() {
    console.log("D completed");
}

// Callback hell
// a(() => {
//     b(() => {
//         c(() => {
//             d();
//         });
//     });
// });


a()
  .then(b)
  .then(c)
  .then(d)
  .catch((err)=> console.log(err))


async function run() {
    try {
        await a();
        await b();
        await c();
        d();// no await as it's not a promise
    } catch (err) {console.log(err);}
    
}

//& How async/await uses resolve()

const data = await fetchData();

//is equivalent to:

fetchData().then(result => {
    data = result;
});


//await waits until resolve() is called.
