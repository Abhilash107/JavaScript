let arr = [1, 1, 1, 0, 1, 0, 1, 0, 1,]
console.log(countOnes(arr));

function countOnes(arr){
    let max = 0
    let c = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]==1){
            c++;
            max = Math.max(max, c)
        }
        else{
            c = 0;
        }
        
    }
    return max
}