
console.log(LargestOddNumber("4980"));


//console.log(s.charAt(s.length-1));



function LargestOddNumber(str){
    let maxOddIndex = Number.MIN_SAFE_INTEGER

    for(let i = 0;i<str.length;i++){
        if(parseInt(str[i]) %2 !== 0 ){
            maxOddIndex = Math.max(maxOddIndex, i)
        }
    }

    return maxOddIndex !== Number.MIN_SAFE_INTEGER ? str.substring(0, maxOddIndex + 1) : "";




























//    if(parseInt(s.charAt(s.length-1)) %2 !== 0) return str
//     let largestOdd = 0

//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let substring = str.substring(i, j + 1)
//             if(parseInt(substring) %2 !== 0){
//                 if(parseInt(largestOdd) < parseInt(substring)){
//                     largestOdd = substring
//                 }
//             }
//         }
         
//     }
//     if(!largestOdd) return ""
//     return largestOdd


}


