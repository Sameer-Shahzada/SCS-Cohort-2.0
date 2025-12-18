// Accept an integer and check whether is an even or odd number.

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any number: "));

// create a function
function isEven(n) {
  if (Number.isNaN(n)) {
    return `Invalid number`;
  }
  if (n % 2 == 0) {
    return `${n} is even number`;
  } else {
    return `${n} is odd number`;
  }
}
console.log(isEven(num));

// Note - “Zero is even because it is divisible by 2 with remainder 0.”
