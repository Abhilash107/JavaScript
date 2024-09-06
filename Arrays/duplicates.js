const a = [ 4, 1, 0, 2, 3]
console.log(findDuplicates(a))

function findDuplicates(a){
    const set =new Set()
    const res = []
    for(let i = 0;i< a.length; i++){
        if(!set.has(a[i])){
            set.add(a[i])
        }else{
            res.push(a[i])
        }
    }
    return res.length ? res : -1
    
}