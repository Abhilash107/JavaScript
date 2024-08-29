class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor(){
        //using LL
        this.top = this.top
        this.size = size

    }

    push(element){
        let node = new Node(element)

        node.next = this.top
        this.top = node
        this.size += 1
    }

    top(){
        if(!this.top)  return null

        return this.top.data
    }

    pop(){
        let temp = this.top
        this.top = this.top.next
        this.size -= 1
    }
    
}