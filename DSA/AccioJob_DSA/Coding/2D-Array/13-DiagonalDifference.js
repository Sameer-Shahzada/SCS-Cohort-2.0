/*
Diagonal Difference!
Given a square matrix of size N, calculate the absolute difference between the sums of its diagonals.

Input Format
The first line contains a single integer N, the number of rows and columns in the square matrix.
Each of the next N lines describes a row, and consists of N space-separated integers.

Output Format
Print the absolute difference between the sums of the two diagonals of the matrix as a single integer.

Example 1
Input

3
11 2 4
4 5 6
10 8 -12

Output
15

Explanation:-
Sum across the primary diagonal: 11 + 5 + (- 12) = 4
Sum across the secondary diagonal: 4 + 5 + 10 = 19

Difference: |4 - 19| = 15

Example 2
Input

3
1 2 3
4 5 6
9 8 9  

Output
2

Explanation:- The left-to-right diagonal sum =1+5+9=15 .
The right to left diagonal = 3+5+9 = 17.
Their absolute difference is |15-17| = 2.

Constraints
1 <= n <= 10^3
-10^3 <= mat[i][j] <=10^3
Note: |x| is the absolute value of x (|x| is always non negative for all x)

Topics: 2D-Arrays
Coding
----------------------------------------------------------------------------------
primarySum += mat[i][i];

Primary diagonal:
top-left → bottom-right
secondarySum += mat[i][n - 1 - i];

Secondary diagonal:
top-right → bottom-left

🔍 Example

Matrix:

1 2 3
4 5 6
7 8 9

Primary diagonal

Indices:

(0,0) = 1
(1,1) = 5
(2,2) = 9

Sum: 15

Secondary diagonal

Indices:

(0,2) = 3
(1,1) = 5
(2,0) = 7

Sum: 15

Difference:

|15 - 15| = 0
✅ Best Part of Your Code

This line:
secondarySum += mat[i][n - 1 - i];
is the most important matrix formula.

🧠 Why n - 1 - i ?

For n = 3
Secondary diagonal indices:

i	j = n-1-i
0	2
1	1
2	0

Pattern:

(0,2)
(1,1)
(2,0)

⚡ Complexity
Complexity	Value
Time	O(n)
Space	O(1)

Very optimal. ✅

*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(mat) {
  let n = mat.length;  
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < n; i++) {
    primarySum += mat[i][i];
    secondarySum += mat[i][n - 1 - i];
  }

  console.log(Math.abs(primarySum - secondarySum));
}

diagonalDifference(matrix);
