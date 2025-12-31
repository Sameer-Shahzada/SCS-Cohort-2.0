//-> Write a program to print the square pattern (rectangle/square) of a given number n using loops.
import promptSync from 'prompt-sync';
const prompt = promptSync();

const r = Number(prompt("Enter a number for rows: "));
const c = Number(prompt("Enter a number for columns: "));

function printSquarePattern(rows, cols) {
    if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows <= 0 || cols <= 0) {
        return "Invalid Input";
    }

    // Outer loop → to control number of rows | It controls vertical printing
    for(let i = 1; i <= rows; i++) {
        // Inner loop → to control number of columns & print '*' for each column in a row 
        // It controls horizontal printing
        for(let j = 1; j <= cols; j++) {
            process.stdout.write("* "); // print '*' in same line without newline
        }
        console.log(); // Moves the cursor to the next line.
        // console.log() is used to move the cursor to a new line after printing all columns of a row.
    }
}
printSquarePattern(r, c);

/*
    “This program prints a square pattern using nested loops where the outer loop controls rows and 
    the inner loop controls columns. process.stdout.write() prints stars on the same line, 
    and console.log() moves the cursor to the next row after each iteration.”
*/

/*

* * * * 
* * * * 
* * * * 
* * * * 

*/