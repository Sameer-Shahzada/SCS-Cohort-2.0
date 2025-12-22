// Write a program to print natural numbers from 1 to n

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any number: "));

// create a function to print the natural number from 1 to n.
function printNaturalNumbers(n) {
  if (Number.isNaN(n) || n < 0) {
    console.log("Invalid Input");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNaturalNumbers(num);
