console.log(onesCompliment(5));
console.log(twosCompliment(3));


function onesCompliment(num){
    let binary = num.toString(2)
    let res = ''

    for (let bit of binary){
        res += bit === "0" ? "1": '0'
    }

    //return parseInt(res, 2)
    return res
}

function twosCompliment(num){
    let binary = num.toString(2)
    let res = ''
    let flag = true

    for (let i =binary.length-1; i >= 0;i--){

        if(flag && binary[i] === '1') {
            res = '1' + res;
            flag = false
        }
        else{
            res = (binary[i] === '1' ? '0' : '1') + res;
        }

       
    }
    //return parseInt(res, 2)
    return res
}