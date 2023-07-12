// Q37 Assignment No 01 Batch 46 Q1
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
//that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt 
//and the message printed on it. Call the function.
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and 
//a shirt of any size with a different message.
function make_shirt(size, msg) {
    return (` ${size}, ${msg} `);
}
console.log(make_shirt("T-Shirt Size : Large", "I love TypeScript. Make a large shirt and a medium shirt with the default message, \n and a shirt of any size with a different message."));
export {};
