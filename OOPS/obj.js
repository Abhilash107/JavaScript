const player = {
    name: 'Cool Joe',
    age: 24,
    club: 'Real madrid',
    nationality: 'Denmark',
}



//* Object.keys() => Returns an array of a given object's property names 
console.log(Object.keys(player));

//* Object.values() => Returns an array of a given object's property values.
console.log(Object.values(player));

//* Object.entries() => Returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 
console.log(Object.entries(player));



//* Object.assign(target, source) => Copies all enumerable own properties from one or more source objects to a target object. It returns the target object (a new Object)
const coach = {
    age: 44,
    club: 'FcPorto',
    titles: 'UCL, UEL, laLiga',
}

const newObj = Object.assign(player, coach)
//? console.log(newObj);




//*Object.create() => creates an object (empty)

const newObj2 = Object.create(newObj)
//console.log(newObj2); // empty Object
newObj2.name = 'gg'
newObj2.age = 28
newObj2.club = 'JUV'
console.log(newObj2);


//*Object.freeze() => Freezes an object. A frozen object can no longer be changed

Object.freeze(coach)
coach.age = 56
//? console.log(coach.age);


//* Object.seal() => Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

const car = {
    make: 'Toyota',
    model: 'Corolla'
};
  
// Seal the car object
Object.seal(car);
  
// Attempt to add a new property
car.year = 2020; // This will fail
  
// Attempt to delete an existing property
delete car.model; // This will also fail
  
// Modify an existing property
car.make = 'Honda'; // This will work if the property is writable
  
//console.log(car); // Output: { make: 'Honda', model: 'Corolla' }
  


//! prototype....
const obj2 = {
    name: 'cool',
    age: 25,
}

obj2.club = 'RMA'

//console.log(obj2);
//console.log(obj2.hasOwnProperty('club'))


function CreateUser(userName, email, password){
    this.setUserName(userName);
    this.email = email;
    this.password = password;
}

CreateUser.prototype.setUserName = function(userName) {
    this.userName = userName;
}

const user = new CreateUser('Abhilash', 'wbqwbh@gmai.com', '2d3rt');
console.log(user);



