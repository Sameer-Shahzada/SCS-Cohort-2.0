/*

Write a program to check whether a given number is a Strong Number or not.

Definition:
    A Strong Number (or Factorion) is a unique positive integer where the sum of the factorials of 
    its individual digits equals the number itself, like 145 (1! + 4! + 5! = 145).

*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter a number:"));

// Function to check the given number is Strong Number or not
function strongNumber(digit) {
  if (!Number.isInteger(digit) || digit <= 0) {
    return "Invalid Input";
  }

  const digits = num.toString().split("");
  let sumOfFactorials = 0;

  digits.forEach((digit) => {
    let d = Number(digit);
    let fact = 1;

    for (let i = 1; i <= d; i++) {
      fact *= i;
    }

    sumOfFactorials += fact;
  });

  return sumOfFactorials === num ? "Strong Number" : "Not a Strong Number";
}
console.log(strongNumber(num));
