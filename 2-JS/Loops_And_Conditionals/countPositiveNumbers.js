// Write a program to count positive numbers from user defined range

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let count = 0;
for(let i = 1; i <= 5; i++) {
    const num = Number(prompt(`Please enter number : `));
    if(num > 0) {
        count++;
    }
}
console.log("Total positive numbers entered:", count);