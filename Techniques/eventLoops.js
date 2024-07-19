console.log('Start'); // synchronous operation  1st

setTimeout(() => {
  console.log('Timeout');  // asynchronous operation   4rd  ,  macro-tasks
}, 0);

Promise.resolve().then(() => {  // asynchronous operation   3rd
  console.log('Promise'); // high priority queue or micro-tasks
});

console.log('End');  //synchronous operation  2nd 


// setTimeout is called with a callback to print Timeout after 0 milliseconds. However, this callback is placed in the macro-task queue (or task queue).
// Promise.resolve().then(...) schedules the callback provided to then to be executed as soon as possible, placing it in the micro-task queue (or job queue).

//*   This means micro-tasks will always be executed before the next rendering or macro-tasks.