// Program to find the factors of a number in ascending order

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any number: "));

// create a function to find out the factors
function findFactors(n) {
  let divisors = []; // an empty array to store the factors.
  for (let i = n; i >= 1; i--) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  divisors.sort((a, b) => a - b).forEach((d) => console.log(d));
}
findFactors(num);