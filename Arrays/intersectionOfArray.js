let arr1 = [1, 2, 3, 4]
let arr2 = [1, 3, 5, 6]

//* if array is sorted
const res = intersection(arr1, arr2)
console.log(res);


function intersection(a1, a2){
    let i = 0
    let j = 0

    let a3 = []

    while(i<a1.length && j<a2.length){
        if(a1[i]<a2[j]){
            i++
        }
        else if(a2[j]<a1[i]){
            j++
        }
        else{//as both are same, we can push a1[i] or a[j]
            a3.push(a1[i])
            i++
            j++
        }
        
    }
    return a3
}
