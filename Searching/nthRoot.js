console.log(nthRoot(3, 8));




function nthRoot(r, num){

    if (num === 0) return 0;
    if (num === 1) return 1;
    
    let l = 0
    let h = num
    while(l <= h){
        let mid = Math.floor((l+h)/2)
        let pow = evaluatePow(mid, r, num)

        if(pow === 1) return mid

        else if(pow === 2)  h = mid -1

        else l = mid+1
    }
    return -1
}

function evaluatePow(mid, r, num){
    let ans = 1
    for (let i = 0; i < r; i++) {
        ans = ans * mid
        if(ans > num) return 2
    }
    if(ans === num) return 1

    return 0
}

