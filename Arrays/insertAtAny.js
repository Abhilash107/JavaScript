let a1= [1, 2, 3, 5, 6, 7, 8, 0, 0, 0]

const value = 4;
const position = 4;

// if(position > 0 && position <= a1.length)
//     for (let i = a1.length-1; i >= 0; i--) {
//         if(i === position - 1){
//             a1[i] = value;
//             break;
//         }else{
//             a1[i] = a1[i-1];
//         }   
//     }

//* optimal
if(position > 0 && position <= a1.length){
    for(let i = a1.length-1; i >= position-1; i--) {
        a1[i]  = a[i-1]
    }
    a[position-1] = value
}

console.log(a1);
