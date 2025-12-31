import promptSync from 'prompt-sync';
const prompt = promptSync();

const r = Number(prompt("Enter a number for rows: "));

function printMirrorRightAngleTriangle(rows) {

    if(!Number.isInteger(rows) || rows <= 0) {
        return "Invalid Input";
    }

    let result = '';

    // Outer loop 
    for(let i = 1; i <= rows; i++) {
        // Inner loop: 
        for(let j = 1; j <= rows -i; j++) {
            result += '  ';
        }
        // right angle triangle part 
        for(let j = 1; j <= i; j++) {
            result += '* ';
        }
        result += '\n';
    }
    return result;
}
console.log(printMirrorRightAngleTriangle(r));

/*
        *
      * *
    * * *
  * * * *
* * * * *

*/