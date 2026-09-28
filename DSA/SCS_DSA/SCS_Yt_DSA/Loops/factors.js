// Write a program to find the factors of given number

/*
1. What are Factors?
    A factor of a number is a number that divides it completely, leaving remainder 0.

For example, for 12:

    12 % 1 = 0  → 1 is a factor
    12 % 2 = 0  → 2 is a factor
    12 % 3 = 0  → 3 is a factor
    12 % 4 = 0  → 4 is a factor
    12 % 5 ≠ 0
    12 % 6 = 0  → 6 is a factor
    12 % 12 = 0 → 12 is a factor

So:

Factors of 12:
1, 2, 3, 4, 6, 12

A useful way to think about factors is factor pairs:

1 × 12
2 × 6
3 × 4

*/

// Brute-force approache
// function findFactors(num) {
//     for(let i = 1; i <= num; i++) {
//         if(num % i === 0) {
//             console.log(i);
//         }
//     }
// }

// findFactors(12)

/*
Complexity
Time:  O(n)
Space: O(1)
*/

// Optimised (Half based Optimization)

function findFactors(num) {
  for (let i = 1; i <= num / 2; i++) {
    // num/2 because no any number can divide which is more than its half
    // No number between 7 and 11 can be a factor of 12.
    // The only factor greater than num / 2 is num itself.
    if (num % i === 0) {
      console.log(i); // print available factors
    }
  }
  // num itself is always a factor
  console.log(num);
}
findFactors(7);

