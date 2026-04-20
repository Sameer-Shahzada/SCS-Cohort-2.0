/*
Right Angle Triangle Stars
Given an integer n, print a right angled triangle full of stars with height and base equal to n.

Input Format
The first line of input contains the integer n.

Output Format
The output should contain a right angled triangle filled with stars with height and base equal to n.

Example 1:
Input

3
Output:

*
**
***
Explanation:

Since n = 3, 3 lines with increasing number of stars are printed.

Example 2:
Input

7
Output

*
**
***
****
*****
******
*******
Explanation:

Since n = 7, 7 lines with increasing number of stars are printed.

Constraints
1 <= n <= 200

Topics
Loops
Companies
Goldman Sachs

*/

function rightAngledTriangle (n) {
    if(!Number.isInteger(n)) {
        return `Invalid Input`;
    }

    // outer loop -> controls rows
    for(let i = 1; i <= n; i++) {
        // inner loop -> controls cols 
        for(let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        // move on to the next line
        console.log()
    }
}
rightAngledTriangle(5)