// Swap two numbers using ES6 arrow function + destructuring

import promptSync from "prompt-sync";
const prompt = promptSync();

// ES6 arrow function (returns swapped values)
const swap = (a, b) => [b, a];

const a = Number(prompt("Enter first number: "));
const b = Number(prompt("Enter second number: "));

if (isNaN(a) || isNaN(b)) {
  console.log("Invalid number");
} else {
  console.log(`Before Swapping: a = ${a}, b = ${b}`);

  // Call the swap function
  const [newA, newB] = swap(a, b);

  console.log(`After Swapping: a = ${newA}, b = ${newB}`);
}
