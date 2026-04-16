//-> 93. Return the first n Fibonacci numbers as an array.

/*
Fibonacci Series
0, 1, 1, 2, 3, 5, 8, 13 ...

Rule:
F(n) = F(n-1) + F(n-2)

Example
Input: n = 5
Output: [0, 1, 1, 2, 3]


2️⃣ Approach (Iterative – Interview Preferred)
1. Handle edge cases (n <= 0)
2. Start with [0, 1]
3. Loop from 2 → n
4. Push sum of last two elements


*/

function fibonacci(n) {

    // edge cases
    if (n <= 0) return [];
    if (n === 1) return [0];

    let result = [0, 1];

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}

console.log(fibonacci(5)); // [0, 1, 1, 2, 3]


/*
Dry Run
n = 5

result = [0,1]

i=2 → 1+0 = 1 → [0,1,1]
i=3 → 1+1 = 2 → [0,1,1,2]
i=4 → 2+1 = 3 → [0,1,1,2,3]

Time & Space Complexity
Time → O(n)
Space → O(n)
*/

/*

Optimized Thinking (Interview Insight)

Interviewers may ask:

👉 “Can you do it without storing full array?”

Then:

function fibonacciOptimized(n) {

    if (n <= 0) return [];

    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

Key Takeaways
Start with [0,1]
Next = sum of previous two
Loop till n

*/