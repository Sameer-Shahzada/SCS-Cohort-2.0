/*

Descending Number Pattern
Given an integer n, print a pattern of n lines, where the ith line has the numbers i to 1 printed in descending order. Check the sample cases for a better understanding.

Input Format:
Input consists of an integer N.

Output Format:
Print the pattern as described above.

Example 1
Input:

5
Output:

1
21
321
4321
54321


Example 2
Input:

3
Output:

1
21
321

Pattern Image

Constraints
1 <= n <= 9

Topics
Loops


*/

function descendingNumberPattern (n) {
    if(!Number.isInteger(n)) {
        return `Invalid Input`;
    }

    // outer loop
    for(let i = 1; i <= n; i++) {
        // inner loop to print descending numbers 
        for(let j = i; j >= 1; j--) {   // reverse the loop to print descending number
            process.stdout.write(`${j }`);
        }

        // no need to print spaces or no need to shifting pattern

        // to move on the next line
        console.log()
    }
}

descendingNumberPattern(5)