let arr = [1, 2, 3, 6, 8]
console.log(noOfOperation(arr));

function noOfOperation(arr){
    let c =0
    for(let i =0;i<arr.length;i++){
        if(arr[i]%3){// 0 is falsy value in  js so.....
            c++
        }
        
    }
    return c

}