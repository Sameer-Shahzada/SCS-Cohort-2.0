// Accept an integer and print hello world n times 

import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Enter any number: "));

// create a function 
function printMessage(num) {
    if (Number.isNaN(num) || num < 0) {
        console.log("Invalid Input");
        return;
    }

    for (let i = 1; i <= num; i++) {
        console.log(`${i} - Hello World`);
    }
}

printMessage(n);