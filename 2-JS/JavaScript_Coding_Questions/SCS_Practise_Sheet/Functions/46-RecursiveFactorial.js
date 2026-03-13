// 46. Calculate factorial using recursion

function findFactorial(n) {

    // Base Case
    // Factorial of 0 or 1 is always 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive Case
    // Multiply n with factorial of (n-1)
    return n * findFactorial(n - 1);
}

console.log(findFactorial(5)); // 120