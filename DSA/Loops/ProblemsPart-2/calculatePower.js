/*
Write a program to take two inputs a, b & find the value of a raised to the power of b.
    Example: a = 2, b = 5
    Output: 2^5 = 32
*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter base value: "));
const power = Number(prompt("Enter exponent value: "));

function calculatePower(base, exponent) {
  if (!Number.isInteger(base) || !Number.isInteger(exponent) || exponent < 0) {
    return "Invalid Input";
  }

  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(calculatePower(num, power));

/*
    “I compute a^b using iterative multiplication instead of built-in functions. 
    This gives linear time complexity and constant space, and handles edge cases like zero exponent cleanly.”
*/
