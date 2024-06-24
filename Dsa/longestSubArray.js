let arr = [1, 2, 3, 1, 1, 1, 1, 3, 3]

const res = longestSubArraySum(arr, 3)
console.log(res);



//* two pointer approach  (for Positive inputs)
function longestSubArraySum(arr, k){
    let i = 0, j =0
    let maxLength = 0
    let sum = arr[0]
    while(j< arr.length){
        while(i <= j && sum > k){
            sum-= arr[i]
            i++
        }

        if(sum == k)
            maxLength = Math.max(maxLength, j-i+1)

        if(j < arr.length)
            sum += arr[j]

        j++

    }

    return maxLength

}