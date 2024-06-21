let arr = [1, 2, 2, 3, 3, 4, 4, 5, 5]
const res = findSingleOccurance(arr)
console.log(res);


function findSingleOccurance(arr){
    let res = 0
    for (let key of arr) {
        res ^= key
    }

    return res
}

