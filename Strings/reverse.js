console.log(reverseModified("Hello    hfhjf nkbebfvib"));



function reverseModified(s) {
    let str = s.trim().split(/\s+/)
    let newStr = ""

    for(let i = str.length-1; i >= 0;i--){
        // after adding one word give space
        newStr += str[i]

        if(i > 0) newStr += " "
    }

    return newStr
};