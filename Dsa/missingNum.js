// ==>  use sum of no.
// ==> we can use XOR
let arr = [1,2,4,5]
const res =missingNumUsingXOR(arr, 5)
console.log(res);



function missingNumUsingXOR(arr, N){
    let XOR1 = 0
    let XOR2 = 0
    const n = N-1

    for(let i =0;i< n;i++){
        XOR2 ^= arr[i]
        XOR1 = XOR1 ^ (i+1)
    }

    XOR1 ^= N

    return XOR1^XOR2

}