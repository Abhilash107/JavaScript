let arr = [1,2,3,4,5,6]
// rotateByOne(arr)
rotateByDthPlaces(arr, 5, arr.length)
console.log(arr);


function rotateByOne(array){
    const temp = array[0]
    for(let i =1;i<array.length;i++){
        array[i-1] = array[i]
    }
    array[array.length -1] = temp
}

function rotateByDthPlaces(arr, d, n){
    //* Brute force
    // let temp = [] // storing
    // for(let i =0;i<d;i++){
    //     temp[i] = arr[i]
    // }

    // for(let i = d;i<n;i++){//shifting o front
    //     arr[i-d] = arr[i]
    // }

    // let j = 0// shifting to back
    // for(let i = n-d; i < n; i++) {
    //     arr[i] = temp[j]
    //     j++
    // }

    //* optimal (reversal algo)
    d = d%n
    // we r passing the index.. 
    //last ele=> n-1,  toBeRotated=>d-1 and d 
    rev(arr, 0, d-1)
    rev(arr, d, n-1)
    rev(arr, 0, n-1)

}

function rev(arr, s, e){
    while(s<=e){
        let temp = arr[s]
        arr[s] = arr[e]
        arr[e]= temp
        s++
        e--
    }
}