let arr = [1,2,3,4,5]
const res = findNums(arr, 7)
console.log(res)

//* sorted case
function findNums(arr, k){
    let i =0, j=arr.length-1
    while(i <= j){
        if(arr[i]+arr[j] == k){
            return new Array(true, arr[i], arr[j])
        }
        else if(arr[i]+arr[j] <= k){
            i++
        }
        else{
            j--
        }

    }

    return false

}

