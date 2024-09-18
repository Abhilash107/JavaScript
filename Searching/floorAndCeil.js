
const arr = [1, 2, 3, 3, 4, 5, 5, 6, 7]
const res = [findCeiling(arr, 2), findFloor(arr, 2) ]

console.log(res); 

function findCeiling(a, x){
    let l =0
    let h = a.length -1
    let ans = a.length

    while(l <= h){

        let mid = Math.floor(l + (h -l)/2);

        if(a[mid] >= x) {
            ans = mid
            h = mid -1
        }
        else{
            l = mid +1
        }
    }
    return ans;

}

function findFloor(a, x){
    let l =0
    let h = a.length -1
    let ans = a.length

    while(l <= h){

        let mid = Math.floor(l + (h -l)/2);

        if(a[mid] <= x) {
            ans = a[mid]
            l = mid +1 
        }
        else{
            h = mid-1
        }
    }
    return ans;

}