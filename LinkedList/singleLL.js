class Node {
    //* No need of initialization od data and next
    constructor(data){
        this.data = data
        this.next = null
    }
}

class main{
    create(arr){
        //* don't use Node variable name
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

    deleteHead(head){
        if(head === null) return null
        head = head.next
        return head
    }

    deleteTail(head){
        if(head === null || head.next === null){
            return null
        } 

        let temp = head
        while(temp.next.next !== null){
            temp = temp.next
        }
        temp.next = null
        return head
    }

    //*position
    deleteAtKthPosition(head, k){
        if(head === null) return null

        if(k === 1){
            head = head.next
            return head
        }

        let cnt = 0
        let temp = head
        let prev = null
        while(temp !== null){
            cnt++
            if(cnt === k){
                prev.next = prev.next.next
                break
            }
            prev = temp
            temp = temp.next
        }
        return head 
    }

    //* value
    deleteValue(head, value){
        if(head === null) return null

        if(head.data === value){
            head = head.next
            return head
        }
        let temp = head
        let prev = null
        while(temp !== null){
           
            if(temp.data === value){
                prev.next = prev.next.next
                break
            }
            prev = temp
            temp = temp.next
        }
        return head
        
    }


    insertAtFirst(head, value){
        let temp = new Node(value)

        if(head === null){
            head = temp
            return head
        }

        temp.next = head
        head = temp
        return head
    }

    insertAtLast(head, value){
        let newNode = new Node(value)

        if (head === null) {
            return newNode;
        }


        let temp = head
        while(temp.next !== null){//temp.next.next !== null
            temp = temp.next
        }
        temp.next = newNode //temp.next.next = newNode
        return head

    }

    //* position
    insertAtKthPosition(head, value, k){
        if(head === null){
            if(k === 1)
                return new Node(value)
            else
                return head
        }

        if(k===1){
            return new Node(value) 
        }
        let cnt = 0

        let temp = head
       
        while(temp!= null){
            cnt++
            if(cnt === k-1){
                let newNode = new Node(value)
                newNode.next = temp.next
                temp.next = newNode
                break
            }
            temp = temp.next
        }
        return head
    }

    //* value
    insertBeforeTarget(head, value, target){
        if(head === null){
            return null
        }

        if(head.data === target){
            return new Node(value) 
        }
       
        let temp = head
        while(temp.next !== null){
            if(temp.next.data === target){
                let newNode = new Node(value)
                newNode.next = temp.next
                temp.next = newNode
                break
            }
            temp = temp.next
        }
        return head
    }

    
}

let arr = [1, 2, 3, 4, 'hello', 6, 7, 8]
//* create an object of main() class
const obj = new main()
let head = obj.create(arr)// getting the head

//obj.traverse(head)//traverse

const res = obj.search(head, 2)
//console.log(res);

const length = obj.length(head)
//console.log(length);


//? Deletion
//head= obj.deleteHead(head)
//obj.traverse(head)

// head = obj.deleteTail(head)
// obj.traverse(head)

// head = obj.deleteAtKthPosition(head, 1)
// obj.traverse(head)

// head = obj.deleteValue(head, 'hello')
// obj.traverse(head)

//? Insertion
// head = obj.insertAtFirst(head, 100)
// obj.traverse(head)

// head = obj.insertAtLast(head, 100)
// obj.traverse(head)

// head = obj.insertAtKthPosition(head, 'yayaya', 2)
// obj.traverse(head)

// head = obj.insertBeforeTarget(head, 'yayaya', 'jj')
// obj.traverse(head)









