class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor(){
        //using LL
        this.top = null
        this.size = 0

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
        return temp.data
    }

    size(){
        return this.size
    }

    display(){
        let temp = this.top

        while(temp){
            console.log(temp.data)
            temp = temp.next
            
        }
    }
    
}

const obj = new Stack()
obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)
obj.push(50)


const data = obj.pop()

console.log("Popped Value: ",data);
obj.display()
