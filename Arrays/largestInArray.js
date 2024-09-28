const arr = [2, 5, 7, 4, 9, 8, 6]

console.log(findLargest(arr));

function findLargest(array){
    let largest = array[0]

    for(let i = 0;i<array.length; i++){
        if(array[i] > largest) largest = array[i]
    }

    return largest;
}