// Write a program to print table of a given number using loop

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any number to print the table: "));

// create a function to print the table of any number
function printTable(n) {
  if (Number.isNaN(n) || n < 0) {
    console.log("Invalid Input");
    return;
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} =  ${n * i}`);
  }
}
printTable(num);
