/* 
    Write a program to check the given number is prime or not.  

    Definition:
        A number greater than 1 that has exactly two divisors: 1 and itself.

*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = parseInt(prompt("Enter a number: "));

function isPrime(n) {
  // Prime numbers must be greater than 1
  if (!Number.isInteger(n) || n <= 1) {
    return "Not prime";
  }

  // Check divisibility up to √n
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return "Not prime";
    }
  }
  return "Prime";
}
console.log(isPrime(num));
