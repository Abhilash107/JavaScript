let arr = [10, 20, 30, 30, 50]
const res = check(arr, 30)
console.log(res);


function check(nums, target){
    let s = 0;
    let e = nums.length - 1;

    while (s <= e) {
        let mid = Math.floor(s + (e - s) / 2);

        if (nums[mid] === target) {
            while (nums[s] < target) {
                s++;
            }
            while (nums[e] > target) {
                e--;
            }
            return [s, e];
        } else if (nums[mid] > target) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }

    return [-1, -1];

    
}