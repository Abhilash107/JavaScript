let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];

merge(arr1, arr2);
console.log("The merged arrays are: ");
console.log("arr1[] = " + arr1.join(' '));
console.log("arr2[] = " + arr2.join(' '));


function merge(a1, a2){
    let r = 0
    let l = a1.length - 1

    while(l >= 0 && r<a2.length){
        if(a1[l] > a2[r]){
            [a1[l], a2[r]] = [a2[r], a1[l]]
            l--
            r++
        }
        else{
            break
        }
    }

    a1.sort( (a, b)=> a-b )
    a2.sort( (a, b)=> a-b )

}