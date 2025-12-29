// -> Reverse a Number Using While Loop (Digit Extraction Method)

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter a number: "));

function reverseNumber(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid Input";
  }

  if(n === 0) {
    return 0;
  }

  let rev = 0;

  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return rev;
}

console.log(reverseNumber(num));

/*
    “I reverse the number by extracting digits using modulus and rebuilding the number using multiplication. 
    This avoids string conversion and runs in linear time with constant space.”
*/
