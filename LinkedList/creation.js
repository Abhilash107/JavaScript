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

    search(head, target){
        let temp = head
        while(temp != null){
            if(temp.data === target){
                return true
            }
            temp = temp.next
        }
        return false
    }

    length(head){
        let count = 0
        let temp = head
        while(temp != null){
            count++
            temp = temp.next
        }
        return count
    }
    
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
const obj = new main()
const head = obj.create(arr)// getting the head

//obj.traverse(head)//traverse

const res = obj.search(head, 3)
//console.log(res);

const length = obj.length(head)
console.log(length);
