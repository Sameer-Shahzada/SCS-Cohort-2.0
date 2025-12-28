// Optimized Prime Check Using √n and Skipping Even Numbers

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter a number: "));

// create a function to check prime number
function isPrime(n) {
  if (!Number.isInteger(n) || n <= 1) {
    return "Not Prime";
  }

  if (n === 2) {
    return "Prime";
  }

  if (n % 2 === 0) {
    return "Not Prime";
  }

  // Check only odd divisors up to sqrt(n)
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return "Not Prime";
    }
  }

  return "Prime";
}

console.log(isPrime(num));

/* 
  “I optimized the prime check by eliminating even numbers and checking divisors only up to √n. 
  This reduces time complexity from O(n) to O(√n).”
*/
