// 46. Calculate factorial of a number using iteration (loop)

function findFactorial(n) {

    // Factorial formula:
    // n! = n × (n-1) × (n-2) × ... × 1
    // Example:
    // 5! = 5 × 4 × 3 × 2 × 1 = 120

    // Variable to store the factorial result
    // We start with 1 because multiplication identity is 1
    let fact = 1;

    // Loop from n down to 1
    // Multiply each number with the current factorial value
    for (let i = n; i >= 1; i--) {
        fact *= i;
    }

    // Return the final factorial result
    return fact;
}

console.log(findFactorial(5)); // Output: 120