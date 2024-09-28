let arr = [1,2,3,4]
const res = lowerBound(arr, 7)
console.log(res);


function lowerBound(arr, x) {
    let i = 0, j = arr.length - 1;
    let ans = arr.length;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (arr[mid] >= x) {
            ans = mid;
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }

    return ans;
}
