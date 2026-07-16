//-> 55. Check whether a number is prime.

function isPrime(n) {
    // Prime numbers must be greater than 1
    if(!Number.isInteger(n) || n <= 1) {
        return `Not a prime number``
    }

    // Check divisibility up to √n
    for(let i = 2; i * i <= n; i++) {
        if(n % i === 0) {
            return `Not a prime number`;
        }
    }
    return `Prime number`;
}

console.log(isPrime(5))