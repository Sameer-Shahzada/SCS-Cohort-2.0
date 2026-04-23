/*

Alphabet Pattern Printing
You are given a number N. Print a pattern consisting of N rows, where the first row has 1 A, the second row has 2 Bs, and so on for N letters. Check the examples for a better understanding.

Input Format
First line of input contains N, the number of rows for the pattern

Output Format
You need to print the pattern.

Example 1
Input

4
Output:

A
BB 
CCC 
DDDD 


Explanation:

For number of rows to be 4 we get this output.

Example 2
Input

5
Output:

A
BB 
CCC 
DDDD 
EEEEE

Explanation:

For number of rows to be 5 we get this output.

Constraints:

1 <= N <= 26

Topics
Loops


*/

function alphabetPattern (n) {
    for(let i = 1; i <= n; i++) {
        let ascii = 64 + i; // to derive per row
        for(let j = 1; j <= i; j++) {
            process.stdout.write(String.fromCharCode(ascii))
            // ascii++;
        }
        console.log()
    }
}

alphabetPattern(5)