arr = [1, 2, 3, 2, 3, 4, 4, 4, 5, 4, 5, 6]

arr.sort((a,b)=> a-b)
console.log(arr)

if(arr.length%2 === 0){

    let mid = arr.length/2
    console.log((mid+1)/2)
    
}