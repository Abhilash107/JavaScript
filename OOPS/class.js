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

console.log(Object.keys(player));

