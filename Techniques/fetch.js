//* Handling Apis  with then and catch
//? Simple API calls or straightforward asynchronous operations.
//? When chaining multiple promises.
//? For compatibility with older codebases that use callbacks and promises.

// const api = fetch('https://api.github.com/users/hiteshchoudhary')
// .then( (response)=>{
//     // Object to json format
//     return response.json()
// } )
// .then( (data)=>{
//     console.log("All data:\t", data); 
// } )
// .catch( (error)=>{
//     console.log('error');
// } )




//* Handling Apis  with async await with tryCatch
//? Improved readability, especially for more complex code
//? Easier error handling with try and catch.

async function handleApi(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log("All data:\t", data);
    } catch (error) {
        console.error('Fetch error: ', error);      
    }
}


handleApi()


//? The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not

//todo: explore 'The Response interface of the Fetch API'


