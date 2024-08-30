class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue{
    constructor(size = 10){
        this.start = this.end = null
        this.CurrentSize = 0
        this.size = size
    }

    push(element){
        if (this.CurrentSize >= this.size) return "Queue is full"
        
        let temp = new Node(element)
        if(this.start === null){
            this.start = this.end = temp
        }
        else{
            this.end.next = temp
            this.end = temp 
        }
        this.CurrentSize += 1
    }

    pop(){
        if(this.start === null) return "Queue is empty"

        let temp = this.start
        this.start = this.start.next
        this.CurrentSize -= 1
        return temp.data
    }

    top(){
        if(this.start === null) return "Queue is empty"

        return this.start.data

    }

    size(){
        return this.CurrentSize;
    }

    display(){
        let temp = this.start

        while(temp !== null){
            console.log(temp.data)
            temp = temp.next  
        }
    }

}

const obj = new Queue()


obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)
obj.push(50)
const value = obj.pop()
console.log("Popped Value: ",value);


obj.display()
