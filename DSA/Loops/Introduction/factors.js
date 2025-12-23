/* Write a program to print the factors of a given number. 
    Definition- 
        The factors of a number are all the whole numbers that divide it exactly, leaving no remainder.
*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any number to find out the factor: "));

function findFactor(n) {
  if (Number.isInteger(n) || n < 0) {
    console.log("Invalid Input");
    return;
  }

  for (let i = n; i >= 1; i--) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
findFactor(num);
