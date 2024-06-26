let arr = [6, 5, 5]
console.log(MVAlgorithm(arr));


function majority(arr){
    const map = new Map()

    for (let index = 0; index < arr.length; index++) {

        if(map.has(arr[index])){
            map.set(arr[index], map.get(arr[index]) + 1)
        }
        else{
            map.set(arr[index], 1)
        }
    }

    for (const [num, count] of map) {
        if(count > arr.length/2){
            return num
        }
        
        
    }
    return -1
}


function MVAlgorithm(arr){
    //Moores's Voting Algorithm
    let c =0
    let element

    for(let i =0;i<arr.length;i++){

        if(c == 0){
            c = 1
            element = arr[i]       
        }
        else if(element === arr[i]){
            c++
        }
        else{
            c--
        }
    }

    let c1 =0
    for(let i =0;i<arr.length;i++){
        if(element == arr[i]) c1++
    }

    if(c1 > arr.length/2){
        return element
    }

    return -1
}