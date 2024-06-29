// try{
//     const res = num + 10
// }catch(err){
//     console.log("An error occurred:", err.message);
// }

//* catching specific errors
// try{
//     const res = num + 10
// }
// catch(err){
//     if(err instanceof ReferenceError){
//         console.log("Oh no! A reference error occurred:", err.message);
//     }
//     else{
//         console.log("Oops! A generic error occurred:", err.message);
//     }
// }


//* finally block
try {
    console.log('try block');
} catch (error) {
    console.log(error.message);
} finally{
    console.log('finally block');
    // gets executed regardless of whether an error occurs or not
}
