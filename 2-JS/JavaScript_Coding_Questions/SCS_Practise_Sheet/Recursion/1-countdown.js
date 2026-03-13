//-> 1. Write a program to create a countdown using recursion 

function countdown(n) {
    // if n is zero then return, nothing to print exit the current block
    // base condition
    if(n === 0) {
        return;
    }

    console.log(n);

    // recursion function   
    countdown(n-1);
}
countdown(5)