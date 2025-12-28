/* 
    Write a program to check given number is prime or not by checking the divisisors upto n/2 (Optimized Brute Force Method).
    Note - If a number have exactly two divisors then it is prime otherwise not.
    Definition:
        A number greater than 1 that has exactly two divisors: 1 and itself.

*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter a number: "));

// create a function to check prime number
function isPrime(n) {
  if (!Number.isInteger(n) || n <= 1) {
    return "Not Prime";
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return "Not Prime"; // early exit
    }
  }

  return "Prime";
}

console.log(isPrime(num));

/* 
  “I optimized the brute-force approach by checking divisors only from 2 to n/2. If any divisor is found, 
  the number is not prime. This avoids unnecessary checks of 1 and n.”
*/
