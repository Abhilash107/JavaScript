class Queue{
    constructor(size = 10){
        this.start = this.end = -1
        this.queue = new Array(size)
        this.size = size
        this.currentSize = 0
    }

    push(element){
        if(this.currentSize >= this.size){
            return "Queue is full"
        }

        if(this.start === -1){
            this.start = this.end = 0
        }

        else{
            this.end = (this.end+1) % this.size
        }

        this.queue[this.end] = element
        this.currentSize += 1;
    }

    pop(){
        if(this.currentSize === 0) return "Queue id empty"

        let data = this.queue[this.start]

        if(this.currentSize === 1) {
            this.start = this.end = -1     
        }

        else{
            // update the start
            this.start = (this.start+1) % this.size
        }
        //update the size
        this.currentSize -= 1
        return data
    }

    top(){
        if(this.currentSize === 0) return "Queue is empty"

        return this.queue[this.start]
    }

    size(){
        return this.currentSize
    }

    display(){
        if(this.start === -1) return "Queue is empty"

        let value = this.start
        while(true){
            console.log(this.queue[value])

            if(value === this.end)  break

            value = (value+1) % this.size
        }
    }
}

const obj = new Queue()

obj.push(10)
obj.push(20)
obj.push(30)
obj.pop()

const value = obj.top()
console.log("Top: ",value);


obj.display()

