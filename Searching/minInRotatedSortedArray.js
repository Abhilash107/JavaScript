const arr = [3, 5, 6, 7, 8, 1, 2, 3, 3]
console.log(findMinSortedArray(arr));


function findMinSortedArray(a){
    let l =0
    let h = a.length-1
    let res = Number.MAX_VALUE

    while(l <= h){
        let mid = Math.floor((l+h)/2)
        
        if (a[l] < a[h]) {
            res = Math.min(res, a[l]);
            break;
        }

        if(a[l] < a[mid]){
            res = Math.min(res, a[l])
            l = mid+1
        }
        else{
            res = Math.min(res, a[mid])
            h = mid-1
        }
    }

    return res;
}

function findMinSortedArray2(a){
    let l =0
    let h = a.length-1
    let res = Number.MAX_VALUE

    while(l <= h){
        let mid = Math.floor((l+h)/2)
        
        if (a[l] <= a[h]) {
            res = Math.min(res, a[l]);
            break;
        }

        if(a[l] === a[mid] && a[mid] && a[h]){
            l++
            h--
            continue
        }

        if(a[l] < a[mid]){
            res = Math.min(res, a[l])
            l = mid+1
        }
        else{
            res = Math.min(res, a[mid])
            h = mid-1
        }
    }

    return res;
}