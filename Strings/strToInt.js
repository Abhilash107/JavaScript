let s= "2"
console.log(convertOptimal("-01s337c0d3"));



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

function convertOptimal(s){

    s= s.trim()
    if (isNaN(parseInt(s))) return 0;

    let ans = ""

    for (let i = 0; i < s.length; i++) {

        if(i === 0 && (s[i] === '-' || s[i] === '+')){
            ans+= s[i]
            continue
        }
        
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            ans += s[i]; 
        } else {
            break;  
        }
    }

    if( parseInt(ans) > 2147483647  ) return 2147483647
    if( parseInt(ans) < -2147483648  ) return -2147483648

    return parseInt(ans)
   
}






// -98 ==> -98 
// w-5