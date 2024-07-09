let arr = [1,2,3,1,2,3,1,2,3,4]

const res = findSingleOneUsingSet(arr)
console.log(res);



function findSingleOne(arr){ //* Optimal
    let xor = 0

    for (let i = 0; i < arr.length; i++) {
        xor ^= arr[i]   
    }
    return xor
}

function findSingleOneUsingSet(arr){
    let set = new Set()
    let duplicate = new Set()
    for (let i = 0; i < arr.length; i++) {
        if((set.has(arr[i]))){
            duplicate.add(arr[i])
            set.delete(arr[i])
        }
        if(!(duplicate.has(arr[i]))){
            set.add(arr[i])
        }
        
    }
    return set.keys(0)
}
