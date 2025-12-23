// Write a program to print factorial of a given number.

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any num to find out the factorial: "));

// create a function to find the factorial
function findFact(n) {
  if (Number.isNaN(n) || n < 0) {
    console.log("Invalid Input");
    return;
  }
  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }
  console.log(fact);
}
findFact(num);
