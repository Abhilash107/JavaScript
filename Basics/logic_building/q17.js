// Write a python program that displays all the numbers from 100 to 1,000, ten per line, that are divisible by 5 or 6. Numbers are separated by exactly one space.

// 18. Write a Python program that prints all numbers from 1 to 100, except multiples of 7, using a for loop


function printNum(){
    for (let i = 1; i <= 100; i++) {
        if(i%7 !== 0) console.log(i);
    }
}

//printNum()

function printNum2(){
    let c = 0
    for (let i = 100; i <= 1000; i++) {
        if(i%5 === 0 || i%6 === 0){
            c++;
            process.stdout.write(i + " ")
        
            if (c % 10 === 0) console.log()  
        }
    }
}

printNum2()

