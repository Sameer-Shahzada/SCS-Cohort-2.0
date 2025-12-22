// Write a program to print the reverse counting from n to 1

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any number: "));

// create a function
function printReverseCount(n) {
 if (Number.isNaN(n) || n < 0) {
    console.log("Invalid Input");
    return;
  }
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

printReverseCount(num);
