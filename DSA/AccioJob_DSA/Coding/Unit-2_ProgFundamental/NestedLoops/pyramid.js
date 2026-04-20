/**
 
Star Pyramid Creation
Given an integer n, print a pyramid full of stars with height equal to n.

Input Format
The first line of input contains the integer n.

Output Format
The output should contain a pyramid filled with stars with height equal to n.

Example 1
Input

3
Output:

Pattern Image

Example 2
Input

7
Output

Pattern Image

Constraints
1 <= n <= 200

Topics
Loops

  
 */

function pyramidPattern(n) {
    // validation 
    if (!Number.isInteger(n)) {
        return `Invalid Input`;
    }


    for (let i = 1; i <= n; i++) {
        // spaces 
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }

        // actual stars 
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        // to move on the next line 
        console.log()
    }
}
pyramidPattern(7)
