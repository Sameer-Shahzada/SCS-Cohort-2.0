/*
Calculate nPr
Given 2 numbers n and r. Your task is to calculate nPr n!/(n-r)!.

Input Format
The first line of Input contains a single integer n.

The second line of input contains a single integer r.

Output Format
Return the value of nPr.

Example 1
Input

5
2
Output

20
Explanation

The value of 5! is 120 and 3! is 6, 120/6 = 20.

Example 2
Input

3
3
Output

6
Explanation

The value of 3! is 6, and 0! is 1.

Constraints
1 <= n <= 10

1 <= r <= n

Topics
Math
Companies
Amazon LinkedIn Samsung Snapdeal
*/

/* 
Concept: nPr (Permutations)
Permutation means arranging r items out of n items where order matters.
Formula:
nPr=n!(n−r)!nPr = \frac{n!}{(n - r)!}nPr=(n−r)!n!​
nPr=n!(n−r)!nPr = \frac{n!}{(n-r)!}nPr=(n−r)!n!​

Step-by-step understanding
Example: n = 5, r = 2
5P2=5!3!5P2 = \frac{5!}{3!}5P2=3!5!​

5!=5×4×3×2×1=1205! = 5 × 4 × 3 × 2 × 1 = 1205!=5×4×3×2×1=120

3!=63! = 63!=6


5P2=120/6=205P2 = 120 / 6 = 205P2=120/6=20

Optimized Insight (Important)
You don’t actually need full factorials.
nPr=n×(n−1)×(n−2)...(n−r+1)nPr = n × (n-1) × (n-2) ... (n-r+1)nPr=n×(n−1)×(n−2)...(n−r+1)
Example:
5P2=5×4=205P2 = 5 × 4 = 205P2=5×4=20
This avoids unnecessary computation.



Edge Cases (based on constraints)

r=nr = nr=n → result = n!n!n!

r=0r = 0r=0 → result = 1 (though not in constraints)

Always ensure: r <= n

Complexity

Optimized approach: O(r)
Factorial approach: O(n)

*/

// JavaScript Solution (Efficient)
function calculateNPR(n, r) {
    let result = 1;

    for (let i = 0; i < r; i++) {
        result *= (n - i);
    }

    return result;
}

// Example usage
console.log(calculateNPR(5, 2)); // 20
console.log(calculateNPR(3, 3)); // 6


// Alternative (Using Factorial – less optimal but valid)
// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// function calculateNPR(n, r) {
//     return factorial(n) / factorial(n - r);
// }