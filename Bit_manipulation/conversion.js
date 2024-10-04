console.log(decimalToBinaryStr("001"));


function binaryToDecimal(str){
    let pow = 1;
    let res = 0;

    for(let i = str.length -1; i >= 0; i-- ){
        res += str[i] === '1' ? pow : 0;
        pow *= 2;
    }

    return res

}


function decimalToBinary(num){
    let res = ''
    let temp = num

    while(temp >= 1){

        res += temp % 2;

        temp = Math.floor(temp / 2)
    }

    return res.split('').reverse().join('');

}

function decimalToBinaryStr(str){
    let res = ''
    let temp = parseInt(str)
    while(temp >= 1){

        res += temp % 2;

        temp = Math.floor(temp / 2)
    }

    return res.split('').reverse().join('');

}