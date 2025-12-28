/* 
    Write a program to check given number is prime or not by counting the number of divisors (Brute Force Method).
    Note - If a number have exactly two divisors then it is prime otherwise not.
    Definition:
        A number greater than 1 that has exactly two divisors: 1 and itself.

*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter a number: "));

function isPrime(n) {
  if (!Number.isInteger(n) || n <= 1) {
    return "Not Prime";
  }

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count === 2 ? "Prime" : "Not Prime";
}
console.log(isPrime(num));

/*
  “This is a brute-force method where I count the number of divisors. If a number has exactly two divisors, 
  it is prime. Although correct, this approach is inefficient for large values.”
*/