let arr = [1,1,2,3]
//* in this pattern otherwise we can use Set
console.log(removeDuplicate(arr));


function removeDuplicate(array){
    let i =0;
    for(let j = 1;j<array.length;j++){
        if(array[j] != array[i]){
            array[i]= array[j]
            i++
        }

    }
    return i+1

}