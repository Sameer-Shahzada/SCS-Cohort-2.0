// Write a program to print counting from n to 1 by using recursion 

function printCounting(n) {
    if(n === 0) return 
    console.log(n);
    printCounting(n-1);

}
printCounting(10)