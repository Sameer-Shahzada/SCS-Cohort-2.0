/*
Digit Frequency Counter
Given a number N and a digit D. Write a program to find how many times the digit D appears in the number N.

Input Format
A single line containing the integers N and D.

Output Format
Return a single integer representing the number of times the digit D appears in the number N.

Example 1
Input

1111221 1
Output

5
Explanation

1 occur 5 times in 1111221.

Example 2
Input

554 4
Output

1
Explanation

4 occur 1 time in 554.

Constraints
1 <= |n| <= 10^9

1 <= |d| <= 9

Topics
Math
JS- Functions and Arrays
Companies
TCS

*/

function digitFreqCounter(n, d) {
    let count = 0;
    while(n > 0) {
       let digit =  n % 10; // extract last digit
        if(digit === d) {
            count++
        }
        n = Math.floor(n / 10);
    }
    return count;
}
console.log(digitFreqCounter(144, 4))