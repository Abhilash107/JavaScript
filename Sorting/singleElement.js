const arr = [1,2,2,3,4,4]

console.log(findElement(arr));



function findElement(a){
    let s = 0
    let e = a.length-1
    let mid
    while(s<=e){
        mid = s + (e-s)/2;

        if(a[mid] === a[mid+1]) {
            s = mid+1
        }  
        if(a[mid] === a[mid-1]) {
            e = mid-1
        }else{
            return a[mid]
        } 
        
    }
    //return a[mid]

}