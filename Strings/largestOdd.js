
let s = "102239537672423884969653287101"

const result = LargestOddNumber(s)
console.log(result);

//console.log(s.charAt(s.length-1));



function LargestOddNumber(str){
   if(parseInt(s.charAt(s.length-1)) %2 !== 0) return str
    let largestOdd = 0

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let substring = str.substring(i, j + 1)
            if(parseInt(substring) %2 !== 0){
                if(parseInt(largestOdd) < parseInt(substring)){
                    largestOdd = substring
                }
            }
        }
         
    }
    if(!largestOdd) return ""
    return largestOdd
}


