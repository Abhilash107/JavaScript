let arr = [3,1,-2,-5,2,-4]
let newArr = changeInArray(arr)
console.log(newArr);


function arrangingArray(arr){
    let newArr = []
    let pI =0, nI = 1
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<0){
            newArr[nI] = arr[i]
            nI += 2
        }
        else{
            newArr[pI] = arr[i]
            pI += 2
        }
        
        
    }
    return newArr
}

