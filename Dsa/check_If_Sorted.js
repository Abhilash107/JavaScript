let arr = [4, 7, 12, 12, 28, 110]
const res = checkIfSorted(arr)
console.log(res);


function checkIfSorted(array){
    for (let index = 1; index < array.length; index++) {
        if  (array[index] >= array[index-1]){
        }else{
            return false
        }
        
    }
    return true
}