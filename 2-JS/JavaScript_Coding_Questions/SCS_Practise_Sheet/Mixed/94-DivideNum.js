// -> 94. Divide two numbers with error handling.

/* 

Problem Understanding

Write a function that:
- Takes two numbers
- Returns their division
- Handles errors like:
- Division by zero
- Invalid inputs


Example
Input: 10, 2 → Output: 5
Input: 10, 0 → Error
Input: "a", 2 → Error

Key Cases to Handle
1. Invalid input (not number)
2. Division by zero
3. Normal division

*/

function divideNumbers(a, b) {
    try {

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Invalid input");
        }

        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;

    } catch (error) {
        return error.message;
    }
}

console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(10, 0)); // Cannot divide by zero

/*
Dry Run 
a = 10, b = 0

b === 0 → true
throw Error → caught in catch
return "Cannot divide by zero"
-----------------------------------------------

Best Practice Version (Clean + Professional)
function divideNumbers(a, b) {

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers");
    }

    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    return a / b;
}

try {
    console.log(divideNumbers(10, 2));
} catch (error) {
    console.log(error.message);
}

Key Takeaways
Division by 0 → must handle
Invalid types → must validate
try-catch → clean error handling
*/