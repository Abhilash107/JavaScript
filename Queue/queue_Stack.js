class QueueUsingStacks {
    constructor() {
        this.stack1 = []; // Stack for enqueue operations
        this.stack2 = []; // Stack for dequeue operations
    }

    enqueue(x) {
        // Push the element onto stack1
        this.stack1.push(x);
    }

    dequeue() {
        // If both stacks are empty, the queue is empty
        if (this.empty()) {
            throw new Error("Queue is empty!");
        }

        // If stack2 is empty, transfer all elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // Pop the element from stack2 (which is the front of the queue)
        return this.stack2.pop();
    }

    front() {
        // Similar to dequeue but without removing the element
        if (this.empty()) {
            throw new Error("Queue is empty!");
        }

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    empty() {
        // The queue is empty if both stacks are empty
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    print(){
        console.log(this.stack1);
    }
}

// Example usage:
const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print()

// console.log(queue.dequeue()); // 1
// console.log(queue.front());   // 2
// console.log(queue.dequeue()); // 2
// console.log(queue.empty());   // false
// console.log(queue.dequeue()); // 3
// console.log(queue.empty());   // true
