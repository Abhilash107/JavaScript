let arr = [1,0,2,0,3,0]
moveZeroToEnd(arr)
console.log(arr);


function moveZeroToEnd(arr){
    let i = -1;
    //* getting the first occurance of Zero
    for(let j=0;j<arr.length;j++){
        if(arr[j] == 0){
            i = j
            break
        }
    }
    if(i == -1) return
    //* iterating i and swapping with non-zeros  

    for(let j= i+1;j<arr.length;j++ ){
        if(arr[j] != 0){
            swap(arr, j, i)
            i++
        }
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}