
console.log(isPerfectNumberOpt(6));

//* Brute force
function isPerfectNumber(num){
    let sum = 0

    for (let i = 1; i <= num/2; i++) {
        if(num%i ===0) sum += i
    }

    return sum === num

}

//* Optimal solution
// The line if (i !== num / i) checks if i and num/i are different
// This is important to avoid counting the square root twice

function isPerfectNumberOpt(num){
    if(num < 1) return false
    
    let sum = 0

    for(let i = 1; i <= Math.sqrt(num);i++){
        if(num%i === 0){
            sum += i

            if(i !== num/i && num !== num/i) sum += num/i
        }
    }
    return sum === num

    
}