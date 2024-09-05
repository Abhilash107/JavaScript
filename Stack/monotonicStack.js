const arr = [6, 0, 8, 1, 3]

const res = monotonic(arr)
console.log((res));



function monotonic(array){
    const n = array.length
    const newArray = []
    const stack = []

    for(let i = n-1;i>=0; i--){

        while(stack.length !== 0 && stack[stack.length-1] <= array[i]){
            stack.pop()
        }

        if(stack.length === 0 ) newArray[i] = -1
        else  newArray[i] = stack[stack.length-1]

        stack.push(array[i])

       
    }
    return newArray























    // const newArray = []

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i+1; j < array.length; j++) {
    //         if(array[j] > array[i]){
    //             newArray[i] = array[j]
    //             break;
    //         }
    //     } 
    // }

    // return newArray
    
}