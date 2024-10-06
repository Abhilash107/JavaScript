a = [1, 3, 4, 2, 3]


console.log(repeatingElement(a))
console.log(missing(a))



//find duplicate in an unsorted array
function repeatingElement(a){
    //! gonna try using two pointer j = n.length - 1- i;
    
    let i = 0
    let j = i + 1

    while(i< a.length){
        if(j >= a.length){
            i++
            j = i + 1//update the j again(very imp)
        }

        else if(a[i] == a[j]) return a[j]

        else j++
    }

    return -1;

}
function missing(a){
    let actualSum = ((a.length) * (a.length + 1))/2
    let sum = 0;

    a.forEach(element => {
        sum += element
    });

    return actualSum - (sum - repeatingElement(a))
}