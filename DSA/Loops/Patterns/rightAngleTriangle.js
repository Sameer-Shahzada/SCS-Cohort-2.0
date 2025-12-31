// Write a program to print a right angle triangle pattern of a given number n using loops.

import promptSync from 'prompt-sync';
const prompt = promptSync();

const r = Number(prompt("Enter a number for rows: "));

function printRightAngleTriangle(rows) {

    if(!Number.isInteger(rows) || rows <= 0) {
        return "Invalid Input";
    }

    let result = '';
    
    // Outer loop: to control number of rows
    for(let i = 1; i <= rows; i++) {
        // Inner loop: to control number of columns & print '*' for each column in a row
        for(let j = 1; j <= i; j++) {
            // result += '* ';     
            // result += `${j}`;   // to print numbers instead of '* ';   
            result += `${String.fromCharCode(64 + j)}`; // to print alphabets instead of '* '; 
        }
        result += '\n';
        
    }
    return result;
    
}
console.log(printRightAngleTriangle(r));
/**

* 
* * 
* * * 
* * * * 
* * * * * 

*/