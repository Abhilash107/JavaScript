const arr = [2, 5, 7, 4, 9, 8, 6]

console.log(findLargest(arr));

function findLargest(arr){
    let largest = arr[0]
    let secondLargest = -1

    for(let i = 0;i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest= largest
            largest = arr[i]
        }
        else if(arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }

    }

    return secondLargest;
}