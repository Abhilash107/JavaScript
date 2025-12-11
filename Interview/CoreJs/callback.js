//^ Callbacks
// (Interview Line)

//A callback is a function passed as an argument to another function, to be executed later (after an async operation completes).

function fetchData(callback){
    setTimeout(()=>{
        callback("Data received");
    }, 1000 );
}

function message(msg){
    console.log(msg); 
}

//fetchData(message("Hello"));//wrong
//You should pass the function, not the result of calling the function.

//fetchData(message);

//or 

// fetchData((data) => {
//     message(data);
// });

//or

fetchData((msg)=>{//arrow function
    console.log(msg);
})


//^ Callback Hell (Very Important)
//Nested callbacks form a pyramid of doom:

getUser(id, (user) => {
    getOrders(user, (order) => {
        getProducts(order, (products) => {
            console.log(products);
        });
    });
});


// Problems:
// Hard to read
// Hard to debug
// Hard to scale
// Messy error handling

