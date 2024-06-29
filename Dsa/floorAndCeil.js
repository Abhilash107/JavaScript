let arr = [10, 20, 30, 30, 40]
const res = [floor(arr, 34), ceil(arr, 34)]
console.log(res);

function floor(arr, x){
    let i =0
    let j = arr.length-1
    let f = -1

    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(arr[mid] <= x){
            f  = arr[mid]
            i = mid+1 
        }
        else{
            j = mid-1
        }      
    }
    return f   
}

function ceil(arr, x){
    let i =0
    let j = arr.length-1
    let c = -1

    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(arr[mid] > x){
            c  = arr[mid]
            j = mid-1
        }
        else{
            i = mid+1
        }    
    }
    return c
    
}