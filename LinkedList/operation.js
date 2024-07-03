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


function reverseR(){

}

let arr = [1, 2, 3, 4, 5, 6]

let head = create(arr)
//print(head)
let mid = middleNode(head)
//console.log(mid.data);
head = reverse(head)
//print(head)

// const res = checkLoop(head)
// console.log(res);

const startLoop = startingOfLoop(head)
//console.log(startLoop);

const length = lengthOfLoop(head)
console.log(startLoop);

