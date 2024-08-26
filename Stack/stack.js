class Stack{
    //* using a array
    constructor(size = 10){
        this.stack = new Array(size)
        this.top = -1
        this.size = size
    }

    push(element){
        if(this.top > this.size) return "Stack is full"
        this.top++
        this.stack[this.top] = element
    }

    top(){
        if(top === -1) return "Stack is empty"

        return this.stack[this.top]
    }

    pop(){
        if(this.top === -1) return "Stack is empty" 
        this.top--
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
obj.pop()
obj.push(2)
obj.push(3)

obj.print()

