// keep asking numbers until user enters an even number 

import promptSync from "prompt-sync";
const prompt = promptSync();

let number = Number(prompt("Enter a number (even number to stop): "));

while (number % 2 !== 0) {
    console.log("You entered an odd number:", number);
    number = Number(prompt("Enter a number (even number to stop): "));
}