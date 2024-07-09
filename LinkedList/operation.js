class Node{
    constructor(data, next){
        this.data = data
        this.next = null
    }
}

function create(arr){
    let head = new Node(arr[0])
    let mover = head

    for (let index = 1; index < arr.length; index++) {
        let newNode = new Node(arr[index])
        mover.next = newNode
        mover = newNode
    }
    return head

}

function print(head){
    if(head === null) return null

    while(head != null) {
        console.log(head.data)
        head = head.next
    }
}

//* tortoise & hare algorithm
function middleNode(head){
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

function reverse(head){ //* iterative
    let temp = head
    let prev = null

    while(temp !== null){
        let front = temp.next
        temp.next = prev
        prev = temp
        temp = front
    }
    return prev  
}

function checkLoop(head){
    //* using map
    // const map = new Map()

    // let temp = head
    // while(temp !== null){
    //     if(map.has(temp)){
    //         return true
    //     }
    //     map.set(temp, true)
    //     temp = temp.next
    // }
    // return false

    //* tortoise & hare algorithm

    let slow = head
    let fast = head
    
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        } 
    }
    return false

}

function startingOfLoop(head){
    //* using map
    // const map = new Map()
    // let temp = head
    // while(temp !== null){
    //     if(map.has(temp)){
    //         return temp
    //     }
    //     map.set(temp, true)
    //     temp = temp.next
    // }
    // return null


    //* tortoise & hare algorithm
    let slow = head
    let fast = head
    
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            slow = head
            while( slow !== fast){
                //? hv to check step by step so iterate one
                slow = slow.next
                fast = fast.next// iterating one
            }
            return slow
        } 
    }
    return null
}

function lengthOfLoop(head){
    // const map = new Map()
    // let temp = head
    // let cnt = 1
    // while(temp !== null){
    //     if(map.has(temp)){
    //         return cnt
    //     }
    //     cnt++
    //     map.set(temp, true)
    //     temp = temp.next
    // }
    // return 0

    //* tortoise & hare algorithm
    let slow = head
    let fast = head
    let c = 0
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        
        if(slow === fast){
           do{
            slow = slow.next
            fast = fast.next
            c++// iterating one
           } 
            while( slow !== fast)
            return c
        } 
    }
    return 0


}

function isPalindrome(head){
    let slow = head
    let fast = head
    // to choose m1 not m2, check fast.next.next !== null
    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    
    let newNode = reverse(slow.next)

    let first = head
    let second = newNode

    while(second !== null){
        if(first.data  !== second.data){
            //* if not, then reverse back to the original list
            reverse(newNode)
            return false
        }

        first = first.next
        second = second.next
    }
    //* if not, then reverse back to the original list
    reverse(newNode)
    return true


}

function oddEvenArrange(head){
    let odd = head
    let even = head.next

    let evenHead = head.next// store the evenHead
    //* as even is always after odd so.....
    while(even !== null && even.next !== null){
        odd.next = odd.next.next
        even.next = even.next.next

        odd = odd.next
        even = even.next
    }

    odd.next = evenHead

    return head
}

function deleteMidNode(head){
    let slow = head
    let fast = head
    // to skip one slow-step
    fast = fast.next.next

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    slow.next = slow.next.next//unlink and link to next
    return head
}


//* imp
function sort(head){
    if(head === null || head.next === null) return head


    let mid = middleNodeSpecial(head)
    let leftHead = head
    let rightHead = mid.next

    mid.next = null

    leftHead = sort(leftHead)
    rightHead = sort(rightHead)

    return merge(leftHead, rightHead)

}

function middleNodeSpecial(head){
    let slow = head
    let fast = head.next

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

function merge(left, right){
    let newNode = new Node(-1)
    let temp = newNode
    while(left !== null && right !== null){

        if(left.data < right.data){
            temp.next = left
            temp = left
            left = left.next
        }
        else{
            temp.next = right
            temp = right
            right = right.next
        }

    }

    if(left) temp.next = left
    else temp.next = right

    return newNode.next
}

function addOne(head){
    let carry = helper(head)

    if(carry === 1){
        let newNode = new Node(1)
        newNode.next = head
        return newNode
    }
    return head
}

//*imp
function helper(temp){
    if(temp == null){
        return 1
    }

    let carry = helper(temp.next)
    temp.data += carry
    if(temp.data < 10){
        return 0
    }
    temp.data = 0
    return 1
}

function removeNthNode(head, N){
    
    let fast = head
    let slow = head
    // fast must be at N
    for(let i = 0;i<N;i++){ 
        fast = fast.next
        // check fast.next === null
        if(fast.next !== null) {
            return head.next
        }
    }
    while (fast.next !== null) {
        fast= fast.next
        slow = slow.next
    }

    slow.next = slow.next.next
    return head
}


function sortZerosOnesTwos(head){
    let zeroHead = new Node(-1)
    let oneHead = new Node(-1)
    let twoHead = new Node(-1)

    let zero = zeroHead
    let one = oneHead
    let two= twoHead

    let temp = head
    while(temp !== null){
        if(temp.data === 1){
            one.next = temp
            one = one.next
        }
        else if(temp.data === 0){
            zero.next = temp
            zero = zero.next
        }
        else{
            two.next = temp
            two = two.next
        }
        temp = temp.next
    }
    zero.next = (oneHead.next)?oneHead.next : twoHead.next
    one.next = twoHead.next 
    two.next = null

    let newNode = zeroHead.next

    return newNode

}


    



//let arr = [1, 4, 3, 2, 5]
let arr = [0,2,1,2,0,2,1]

let head = create(arr)
//print(head)
let mid = middleNode(head)
//console.log(mid.data);

//head = reverse(head)
//print(head)

// const res = checkLoop(head)
// console.log(res);

const startLoop = startingOfLoop(head)
//console.log(startLoop);

const length = lengthOfLoop(head)
// console.log(startLoop);

const res = isPalindrome(head)
//console.log(res);

// head = oddEvenArrange(head)
// print(head)

// head = deleteMidNode(head)
// print(head)


// head = sort(head)
// print(head)

// head = addOne(head)
// print(head)

// head = removeNthNode(head, 5)
// print(head)

head = sortZerosOnesTwos(head)
print(head)

