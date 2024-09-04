class Stack{
    constructor(size){
        this.stack = []
        this.top = -1
    }

    push(element){
        if(this.stack.length === 0){
            this.stack.push({element: element, min: element})
        }
        else{
            let currentElement = this.stack[this.top].min
            this.stack.push({element: element, min: Math.min(element, currentElement)})
        }
        this.top++

    }
    topElement(){
        if(this.top === -1) return "Stack is empty"

        return this.stack[this.top].element
    }

    getMin(){
        if (this.top === -1) return "Stack is empty";

        return this.stack[this.top].min
    }

    pop() {
        if (this.top === -1) return "Stack is empty";
        
        this.stack.pop(); // Remove the top element
        this.top--; // Decrement the top pointer
    }
}

let stack = new Stack();

stack.push(5);
stack.push(2);
stack.push(10);

console.log(stack.getMin()); // Outputs: 2
console.log(stack.topElement()); // Outputs: 10

stack.pop();
console.log(stack.getMin()); // Outputs: 2
console.log(stack.topElement()); // Outputs: 2
