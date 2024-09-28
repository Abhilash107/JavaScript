//* kadane's Algorithm
// sum = 0
// maxSum = arr[0]

// sum += maxSum

// check if sum < 0 then sum === 0 else move 

// now again repeat the process and if sum > maxSum update it

// intialize  start startInd and endInd
// when sum is 0, start = i(pointer)
// and max = sum , startInd = start, endInd = i

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const sum = maxSubArray(arr)
console.log(sum);

function maxSubArray(arr){
    let sum =0
    let maxSum = arr[0]

    arr.forEach(element => {
        sum += element
        //?best way to update the greater value
        maxSum = Math.max(maxSum, sum)
        if(sum < 0) sum = 0
        
    });
    return maxSum
}


