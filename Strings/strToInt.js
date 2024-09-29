let s= "2"
console.log(convert("-01s337c0d3"));



// good for logic building but it's close to optimal
function convert(s){

    if (isNaN(parseInt(s))) return 0;

    let ans = ""

    for (let i = 0; i < s.length; i++) {

        if(i === 0 && s[i] === '-'){
            ans+= s[i]
        }

        if(i === 0 && isNaN(s[i])){
            continue;
        }
        
        if(!isNaN(s[i]) && s[i] !== ' '){
            ans += s[i]
        }
        else{
            break;
        }
    }

    return isNaN(parseInt(ans)) ? 0 : parseInt(ans);
}

function convert(s){

    let ans = ''
    let negativeStatus = false

    for (let i = 0; i < array.length; i++) {
        
    }
   
}






// -98 ==> -98 
// w-5