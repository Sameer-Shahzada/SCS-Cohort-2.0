/*
Recursion 
    A function calling again and again itself until it reaches a stoping point is called Recursion.
*/

//-> Write a program to print Hello World by using recursion 

function temp(n) {
    if(n === 0) {
        return;
    }
    console.log("Hello World");
    temp(n - 1) // recursive call  
}
temp(5);