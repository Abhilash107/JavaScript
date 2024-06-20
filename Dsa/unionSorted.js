let a = [1,2,3]
let b = [1,2]
const arrrr = unionSort(a, b);
console.log(arrrr);


function unionSort(num1, num2){
    const l1 = num1.length
    const l2 = num2.length

    let num3 = []

    let i=0
    let j =0

   while(i< l1 && j< l2){
    if(num1[i] <= num2[j]){
        if(num3.length == 0 || num3[num3.length-1] != num1[i]){
            num3.push(num1[i])
            
        }
        i++
    }

    else{
        if(num3.length == 0 || num3[num3.length-1] != num2[j]){
            num3.push(num2[j])
           
        } 
        j++
    }

   }

   while(i< l1){
    if(num3.length == 0 || num3[num3.length-1] != num1[i]){
        num3.push(num1[i])
        i++
    }
   }

   while(j<l2){
    if(num3.length == 0 || num3[num3.length-1] != num2[j]){
        num3.push(num2[j])
        j++
    }
   }

   return num3

} 


