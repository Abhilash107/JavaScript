



//* Better than N/2
function check(num){

    if(num === 0 || num === 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num%i == 0) return false  
    }
    return true
}

function sumOfPrimes(num){
    let sum = 0

    for (let i = 2; i < num; i++) {
        if(check(i)) sum += i
    }

    return sum
}