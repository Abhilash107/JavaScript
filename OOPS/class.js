class player{
    constructor(id, name){
        this.id = id
        this.name = name
    }

    details(){
        console.log(this.id,"", this.name);
    }
}

const p1 = new player(1, 'Abhilash')
const p2 = new player(2, 'Papun')

// p1.details()
// p2.details()

console.log(Object.keys(p1));//[ 'id', 'name' ]
console.log(Object.values(p1));// [ 1, 'Abhilash' ]

// const obj = {1.3:'ee'} 
// console.log(obj);//{ '1.3': 'ee' }


const obj1 = {mode:'ee', foo(){console.log('Hello');}} 

const obj_2 = {}
obj_2.__proto__ = obj1
// console.log(obj_2.foo());// hello and undefined
// obj_2.foo()// hello

const obj3 = {mode:'ee', foo(){return ('Hello');}}
const obj_4 = {}
obj_4.__proto__ = obj3
console.log(obj_4.foo());// hello and undefined
obj_4.foo()// nothing in console


