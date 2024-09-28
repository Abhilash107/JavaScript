let arr = [1, 2, 2, 3, 3]

console.log((1+4)/2);

const res =findSingleNum(arr)
//console.log(res);

function findSingleNum(arr){
    if(arr[0] !== arr[1]) return arr[0]
    if(arr[arr.length-1] !== arr[arr.length-2]) return arr[arr.length-1]

    let i = 1
    let j = arr.length-2
    let mid

    while(i<= j){
        mid = (i+j)/2

        if(arr[mid] !== arr[mid-1] && arr[mid] !== arr[mid+1]){
            return arr[mid]
        }
        else if( (mid %2 ==0 && arr[mid] === arr[mid-1]) || (mid %2 ==0 && arr[mid] === arr[mid+1])){
            i = mid +1
        }
        else{
            j = mid -1
        }   
    }
    return -1

}