// Write a program to check given number is prime or not.

/* 
  A prime number is a whole number greater than 1 that can only be divided evenly by 1 and itself.
  Ex - 2, 3, 5, 7, 11, 13, 17, 19, 23, ... and so on.

*/

function isPrime(n) {

    // Prime numbers are positive integers greater than 1.
    // Therefore, 0, 1 and negative numbers are not prime.
    if (n <= 1) {
        return false;
    }

    // 2 is the only even prime number.
    if (n === 2) {
        return true;
    }

    // Any even number greater than 2 cannot be prime.
    if (n % 2 === 0) {
        return false;
    }

    // We only need to check divisors up to √n.
    // We start from 3 and increase by 2 to check only odd numbers.
    for (let i = 3; i <= Math.sqrt(n); i += 2) {

        // If n is completely divisible by i,
        // then n has a divisor other than 1 and itself.
        if (n % i === 0) {
            return false;
        }
    }

    // No divisor was found, so n is prime.
    return true;
}

console.log(isPrime(12));