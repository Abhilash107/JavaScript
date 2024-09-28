let arr = [0, 1, 2, 0, 1, 1, 1, 2, 2, 0, 0, 2]

sortDNF(arr)
console.log(arr);


// Better solution -> O(n)
function sort(arr){
    let c0 = 0, c1 =0, c2 =0
    for (const key of arr) {
        if( key === 0) c0++
        if( key === 1) c1++
        if( key === 2) c2++  
    }

    for (let index = 0; index < c0; index++) {
        arr[index] = 0
    }
    for (let index = c0; index < c0 + c1; index++) {
        arr[index] = 1
    }
    for (let index = c0 + c1; index < c0 + c1 + c2; index++) {
        arr[index] = 2
    }

    console.log(arr);

}


// Optimal solution -> Dutch National flag Algorithm
// 3 pointers low, mid, high
// 0 -> low-1   === 0
// low -> mid-1  === 1
// high+1 -> n-1    === 2

// here the mid -> high  section is unsorted

function sortDNF(arr) {
    let low =0, mid = 0, high = arr.length-1
    while(mid <= high){
        if(arr[mid] == 0){
            //swap(arr, low, mid)
            [ arr[low], arr[mid] ]=  [ arr[mid], arr[low] ]
            low++;
            mid++;
        }
        else if(arr[mid] == 1){
            mid++
        }
        else{
            //swap(arr, mid, high)
             [ arr[mid], arr[high] ] =  [ arr[high], arr[mid] ]
            high--
        }
    }
    
};
