const startTime = performance.now(); // Start time

for (let i = 1; i <= 1000000; i++) {
    
}

const endTime = performance.now(); // End time

console.log("Time taken (milliseconds):", (endTime - startTime).toFixed(4));
console.log("Time taken (seconds):", ((endTime - startTime) / 1000).toFixed(4));
