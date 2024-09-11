const arr = [1, 2, 2, 3, 4, 5, 6, 7,]
const result =[findFirst(arr, 2), findLast(arr, 2)] 
console.log(result);



function findFirst(a, k){
    let s = 0
    let e = a.length - 1

    let first = -1

    while(s <= e){
        let mid = Math.floor((s + e) / 2);

        if(a[mid] === k){
            first = mid
            e = mid -1
        }
        else if(a[mid] < k){
            s = mid+1 
        }
        else{
            e = mid -1
        }
    }
    return first  
}

function findLast(a, k){
    let s = 0
    let e = a.length - 1

    let last = -1

    while(s <= e){
        let mid = Math.floor((s + e) / 2);

        if(a[mid] === k){
            last = mid
            s = mid + 1
        }
        else if(a[mid] < k){
            s = mid+1 
        }
        else{
            e = mid -1
        }
    }
    return last  
}