console.log(findSqrt(29));


function findSqrt(num){
    let l = 0
    let h = num
    //let h = num/2 is faster but it fails when num < 4

    while(l <= h){
        let mid = Math.floor((l + h)/2)

        if(mid * mid <= num){
            l = mid + 1
        }
        else{
            h = mid -1
        }
    }
    return h
}