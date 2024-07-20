//* Handling Apis 



const api = fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response)=>{
    // Object to json format
    return response.json()
} )
.then( (data)=>{
    console.log("All data:\t", data); 
    //return data.id
} )
// .then( (data)=>{
//     console.log("\nData: ", data);
// } )
.catch( (error)=>{
    console.log('error');
} )
