// Inverted Right Angled Triangle Pattern

import promptSync from 'prompt-sync';
const prompt = promptSync();

const r = Number(prompt("Enter a number for rows: "));

function printInvertedRightAngeldTriangle(rows) {
    let result = '';
    
    // Outer loop
    for(let i = 1; i <= rows; i++) {
        // Inner Loop
        for(j = 1; j <= rows - i + 1; j++) {
            result += '* ';
        }
        result += '\n';
    }
    return result;
    
}
console.log(printInvertedRightAngeldTriangle(r));

/**
 
* * * * * 
* * * * 
* * * 
* * 
* 

*/

