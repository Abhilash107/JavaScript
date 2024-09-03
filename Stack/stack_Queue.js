class StackUsingSingleQueue {
    constructor() {
        this.queue = [];
    }

    push(x) {

        this.queue.push(x);

        // Rotate the queue so that the last added element is at the front
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    pop() {
        if (this.empty()) return ("Stack is empty!");
        
        return this.queue.shift();
    }

    top() {
        if (this.empty()) {
            throw new Error("Stack is empty!");
        }
        return this.queue[0];
    }

    empty() {
        return this.queue.length === 0;
    }

    print(){
        console.log(this.queue);
    }
}

const stack2 = new StackUsingSingleQueue();
stack2.push(1);
stack2.push(2);
stack2.push(3);
stack2.print()

// console.log(stack2.pop()); // 3
// console.log(stack2.top()); // 2
// console.log(stack2.pop()); // 2
// console.log(stack2.empty()); // false
// console.log(stack2.pop()); // 1
// console.log(stack2.empty()); // true
