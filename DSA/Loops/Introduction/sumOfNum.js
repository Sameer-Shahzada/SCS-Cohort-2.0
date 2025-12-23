// Write a program to calculate the sum upto n natural numbers

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any number: "));

// create a function to print the sum upto n numbers
function sumOfNumbers(n) {
  if (Number.isNaN(n) || n < 0) {
    console.log("Invalid Input");
    return;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNumbers(num);
