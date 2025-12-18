// 1- Accept two numbers and print the greatest number between them.import promptSync from 'prompt-sync';

import promptSync from 'prompt-sync';
const prompt = promptSync();

// accepts two number for comparison
const x = Number(prompt("Enter the value of x: "));
const y = Number(prompt("Enter the value of y: "));

// create a function
function checkGreaterNumber(num1, num2) {
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else if (num2 > num1) {
    return `${num2} is greater than ${num1}`;
  } else {
    return `Both values are equal`;
  }
}

console.log(checkGreaterNumber(x, y));
