a = [7,1,5,4,3,4,6,0,9,5,8,2]

console.log(count(a));


function count(arr){
    if(arr.length === 2) return arr[0], arr[1]
    let map = new Map();
    let res = []
    
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    for (const [key, value] of map) {
        if(value === 2) res.push(key)
    }

    return res.sort((a,b)=> a-b);

    
}