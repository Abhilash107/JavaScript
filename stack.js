class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Return the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Empty the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.pop());  // 30
  console.log(stack.peek()); // 20
  console.log(stack.size()); // 2
  console.log(stack.isEmpty()); // false
  stack.clear();
  console.log(stack.isEmpty()); // true
  