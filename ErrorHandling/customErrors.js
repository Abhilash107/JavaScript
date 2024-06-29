//* throwing custom errors

class myCustomError extends Error {
    constructor(msg){
        super(msg)
        this.name = 'myCustomError'
    }
}

try {
    throw new myCustomError('this is a custom error')
} catch (error) {
    console.log(error.name, error.message);
    
}