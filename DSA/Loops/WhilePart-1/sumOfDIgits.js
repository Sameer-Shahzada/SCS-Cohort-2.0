// Write a program to calculate the sum of digits of a given number

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter a number: "));

function sumOfDigits(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid Input";
  }

  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumOfDigits(num));

/*
    “I calculate the sum of digits by repeatedly extracting the last digit using modulus and adding it to a sum variable. 
    This method avoids string manipulation and maintains linear time complexity with constant space usage.”
*/
