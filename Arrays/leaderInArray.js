const arr = [16, 17, 4, 3, 5, 2]
console.log(findLeaders(arr))


function findLeaders(arr){
    let n = arr.length
    const leader = [arr[n-1]]
    
    let max = arr[n-1]
    for (let i = n-2; i >= 0; i--) {
        if(arr[i] >= max){
            leader.push(arr[i])
            max = arr[i]
        }
    }
    return leader.reverse()
}