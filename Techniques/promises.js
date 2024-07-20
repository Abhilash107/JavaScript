// const promise = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log('Async tasks');
//         resolve()
//     }, 2000)
// })

// promise.then(function(){
//     console.log("promise consumed");
// })



// const promiseTwo = new Promise(function (resolve, reject){
//     setTimeout(()=>{
//         console.log('Async task 2');
//         resolve()
//     }, 1000)
// })

// .then(function(){
//     console.log('Async task resolved');
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             username: 'Abhi',
//             email: 'abhi@gmail.com'
//         })
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



const promiseFour = new Promise(function(resolve, reject){
    resolve({
        username: 'Papun',
        email: 'abhi123@gmail.com'
    })
})


    //*  handling by then & catch
// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.username
// })
// .then( (username)=>{
//     console.log(username);
// })
// .catch( (error)=>{
//     console.log(error);
// } )



    //* handling by async await  (use try, catch)
async function consumePromiseFour(){
    try {
        console.log(await promiseFour)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour()


