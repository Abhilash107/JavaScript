let arr = [7, 1, 4, 5, 3, 6]
const profit = max(arr)
console.log(profit);

function max(arr){
    let min = arr[0]
    let profit = 0

    for(let i =1;i<arr.length;i++){
        let cost = arr[i] - min// cost(profit)
        profit = Math.max(profit, cost)// get the max profit

        min = Math.min(min, arr[i])// update the min buying cost
    }
    
    return profit
}