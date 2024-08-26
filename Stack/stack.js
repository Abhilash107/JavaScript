class Stack{
    //* using a array
    constructor(size = 10){
        this.stack = new Array(size)
        this.top = -1
        this.size = size
    }

    push(element){
        if(this.top >= this.size -1) return "Stack is full"
        
        this.stack[++this.top] = element
    }

    topElement(){
        if(this.top === -1) return "Stack is empty"

        return this.stack[this.top]
    }

    pop(){
        if(this.top === -1) return "Stack is empty" 
        return this.stack[this.top--]
    }

    size(){
        return this.top+1
    }

    print(){
        while(this.top !== -1){
            console.log(this.stack[this.top--]);
        }
    }
}


const arr = []
const obj = new Stack()
obj.push(1)
let value = obj.pop()
obj.push(2)
obj.push(3)

obj.print()
console.log("Popped element: ",value);


