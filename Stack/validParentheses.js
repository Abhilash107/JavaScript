const s = "()[{}()]"

const res = validCheck(s)

console.log(res);

function validCheck(str){
    const stack = []

    for(let i = 0;i<str.length; i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{' ){
            stack.push(str[i])
        }
        else{
            if(str.length === 0)  return false
            let ch = stack.pop()
            if (
                (str[i] === ')' && ch !== '(') ||
                (str[i] === ']' && ch !== '[') ||
                (str[i] === '}' && ch !== '{')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0
}