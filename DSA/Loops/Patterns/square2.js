//-> Write a program to print the square pattern (rectangle/square) of a given number n using loops.

import promptSync from 'prompt-sync';
const prompt = promptSync();

const r = Number(prompt("Enter a number for rows: "));
const c = Number(prompt("Enter a number for columns: "));

function printSquarePattern(rows, cols) {
    if(!Number.isInteger(rows) || !Number.isInteger(cols) || rows <= 0 || cols <= 0) {
        return "Invalid Input";
    } 

    let result = ''; 
    // Outer loop 
    for(let i = 1; i <= rows; i++) {
        // Inner Loop 
        for(let j = 1; j <= cols; j++) {
            result += '* '; // Append '*' and a space to result string
        }
        result += '\n'; // Append newline character after each row
    }
    return result;
}
console.log(printSquarePattern(r, c));

/*

* * * * 
* * * * 
* * * * 
* * * * 

*/