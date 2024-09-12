const arr = [1, 2, 3, 4, 6, 7]

const res = findElementRecursive(arr,0, arr.length-1, 1)
console.log(res);


function findElement(a, x){
    let l =0
    let h = a.length -1

    while(l <= h){

        let mid = Math.floor(l + (h -l)/2);

        if(a[mid] === x) return a[mid]

        else if(a[mid] > x){
            h = mid - 1
        }
        else{
            l = mid +1
        }
    }
    return -1;
}

function findElementRecursive(a, l, h, x){
   if(l > h) return -1

    let mid = Math.floor(l + (h -l)/2);

    if(a[mid] === x) return a[mid]

    else if(a[mid] > x){
        return findElementRecursive(a, l, mid-1, x)
    }
    else{
        return findElementRecursive(a, mid+1, h, x)
    }
    
    return -1;
}


