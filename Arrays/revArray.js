const arr = [1, 2, 3, 4, 5,]
console.log(reverse(arr));

function reverse(a){
    let l =0
    let h = a.length-1

    while(l <= h){
        [a[l], a[h]] = [a[h], a[l]]
        l++
        h--
    }

    return a
}