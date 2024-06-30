class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class main{
    create(arr){
        let head = new Node(arr[0])
        let mover = head

        for (let i = 1; i < arr.length; i++) {
            let tempNode = new Node(arr[i])
            mover.next = tempNode
            mover = tempNode
        }
        return head
    }

    traverse(head){
        let temp = head
        while(temp != null){
            console.log(temp.data);
            temp = temp.next
        }
    }
    
}

let arr = [1, 2, 3, 4]
const obj = new main()
const node = obj.create(arr)// getting the head
obj.traverse(node)//traverse
