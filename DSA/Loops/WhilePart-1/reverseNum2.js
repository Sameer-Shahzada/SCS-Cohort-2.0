// -> Reverse a Number Using recursion

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter a number: "));

function reverseNumber(n, rev = 0) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid Input";
  }

  if (n === 0) {
    return rev;
  }

  return reverseNumber(Math.floor(n / 10), rev * 10 + (n % 10));
}
console.log(reverseNumber(num));

/*
    “I reverse the number recursively by extracting the last digit and building the reversed number as I go. 
    This method avoids string manipulation and maintains linear time complexity with constant space usage.”
*/
