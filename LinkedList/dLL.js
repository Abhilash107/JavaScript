class Node{
    constructor(data, next = null, back = null){
        this.data = data
        this.next = next
        this.back = back
    }
}

class main{
    creation(arr){
        if(arr.length === 0) return null
        let head = new Node(arr[0])
        let prev = head

        for(let i=1;i<arr.length;i++){
            let temp = new Node(arr[i], null, prev)
            prev.next = temp
            prev = temp
        }
        return head
    }

    print(head){
        while(head != null){
            console.log(head.data)
            head = head.next
        }
    }

    deleteHead(head){
        if(head === null || head.next === null) return null
        let prev = head
        head = head.next// head --> 2nd node
        head.back = null// Remove the backward link from the new head to the old head.
        prev.next = null// Remove the forward link from the old head to the new head.
        return head
    }

    deleteTail(head){
        if(head === null || head.next === null) return null

        let tail = head 
        while(tail.next !== null){
            tail = tail.next
        }
        let prev = tail.back//hv to store before pointing to null
        prev.next = null
        tail.back = null

        return head
    }


    deleteKthElement(head, k){
        if(head == null) return null

        let temp = head 
        let cnt = 0
        while(temp !== null){
            cnt++
            if(cnt === k) break

            temp = temp.next
        }

        let prev = temp.back
        let front = temp.next

        if(prev === null && front === null){
            return null
        }
        else if(prev === null){
            return this.deleteHead(head)
        }
        else if(front === null){
            return this.deleteTail(head)
        }  
        prev.next = front
        front.back = prev
        temp.back = temp.next = null
        

        return head
    }

    deleteNode(node){
        //node !== head
        let prev = node.back
        let front = node.next
        if(front === null){
            prev.next = null
            return head
        }

        prev.next = front
        front.back = prev
        node.back = node.next = null
        return head
    }

    insertAtHead(node){
           

    }
}

let arr = [1, 2, 3, 4, 5]
const obj = new main()
let head = obj.creation(arr)
//obj.print(head)

//head = obj.deleteHead(head)
//obj.print(head)

//head = obj.deleteTail(head)

// head = obj.deleteKthElement(head, 2)
// obj.print(head)

// head = obj.deleteNode(head.next.next.next)
// obj.print(head)
