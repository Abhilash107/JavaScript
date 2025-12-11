//^Create an obj
//1.
const obj = {
    name: "Abc",
    age: 20
};

//2.sing constructor
const obj1 = new Object();
obj1.name = 'Abc';
obj1.age = 20;

//3.Using a function (object factory)
function createUser(name, age){
    return { name , age};
}

//^ Accessing obj properties
//Dot notation
console.log(obj);
console.log(obj1);

//Bracket notationlog
console.log(obj['age']);
//console.log(obj[age]);//ReferenceError: age is not defined

//Use this
const key = "age";
console.log(obj[key]); // Works!
//Without quotes, age is interpreted as a variable. If the variable does not exist, JavaScript throws a ReferenceError.

//add new property
obj.city = 'Cuttack';

//update
obj.age = 25

delete obj.city;
console.log(obj);//Note: delete removes a property but does not affect prototype chain.

//^check if property exists
// console.log("name" in obj);
// console.log('city' in obj);//false
// console.log(obj.hasOwnProperty('age'));//true

//^iterating
for (let key in obj) {
    console.log(key, obj[key]);
}
//name Abc
//age 25

// for (let key of Object.keys(obj)) {
//     console.log(key, obj[key]);
// }

// for (let value of Object.values(obj)) {
//     console.log(value);
// }


// for (let [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }

//^ Meging objs
//Using spread op
const combined = {...obj, ...obj1};
console.log(combined);

//using objct.assign()

const combined1 = Object.assign({}, obj, obj1)

//^ Cloning
//shallow copy using spread
const copy1 = {...obj}
//shallow (assign)
const copy2 = Object.assign({}, obj);


//deep copy
const deep = JSON.parse(JSON.stringify(obj));

//* What is Shallow Copy?

// A shallow copy copies only the top-level values.
// If the object contains nested objects or arrays, the references are copied—not the actual nested values.
// So both original and copied object share the same nested objects.


//* What is Deep Copy?
// A deep copy creates a completely independent clone of the object, including all nested objects and arrays.
// No reference sharing
// Modifying the copied object does NOT affect the original

//^ Nested Objects
const user = {
    name: "Abhi",
    address: {
        city: "Delhi",
        pin: 110001
    }
};

console.log(user.address.city);

//* Optional Chaining (Safe Access)
// Prevents errors if a property does not exist.
// If property missing → returns undefined instead of crashing.
console.log(user?.address?.city);
console.log(user?.address?.age);//undefined


const newUser = {
    name: "Abhilash",
    age: 23
};
//^ Object Destructuring
const {name, age} = newUser;
console.log(name, age);//Abhilash 23

//rename key
const { name: fullName } = newUser;
console.log(fullName, age);//Abhilash 23

//^ Object methods 12 GPT










