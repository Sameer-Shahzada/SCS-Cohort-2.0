/*
Sum of upper and lower triangles

Given a square matrix of size n*n, print the sum of upper and lower triangular elements.
Upper Triangle consists of elements on the diagonal and above it.
Lower triangle consists of elements on the diagonal and below it.

Note
Diagonal here refers to the primary diagonal (starting at upper left corner and ending at bottom right corner).
Your task is to complete the function triangleSums which receives n and input matrix as parameters and prints the sum of upper and lower triangles separated by space.

Input Format
First line contains the value 'n'.

Next 'n' of each lines contain 'n' spaced integers.

Output Format
Print space separated sum of upper triangle followed by lower triangle.

Example 1
Input

3
1 2 3
1 5 3
4 5 6

Output

20 22
Explanation

Sum of lower triangle is 1+5+6+1+5+4 = 22 and upper triangle is 1+5+6+2+3+3 = 20

Example 2
Input

2
1 2
5 6
Output

9 12
Explanation

Sum of lower triangle is 1+6+5= 12 and upper triangle is 1+6+2 = 9

Constraints
1 <= n <= 10^3
1 <= mat[i][j] <=10^3

Topics: Math
2D-Arrays
*/

/*

This problem is based on identifying:

🧠 Triangle Conditions
✅ Upper Triangle

Includes: diagonal + above diagonal

Condition: j >= i

✅ Lower Triangle

Includes: diagonal + below diagonal

Condition: i >= j

🔍 Example

Matrix:

1 2 3
1 5 3
4 5 6

Upper Triangle
1 2 3
  5 3
    6

Sum: 1+2+3+5+3+6 = 20

Lower Triangle
1
1 5
4 5 6

Sum: 1+1+5+4+5+6 = 22

*/

let matrix = [
  [1, 2, 3],
  [1, 5, 3],
  [4, 5, 6],
];

function triangleSums(mat) {
  let upperSum = 0;
  let lowerSum = 0;
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // upper triangle
      if (j >= i) {
        upperSum += mat[i][j];
      }

      // lower triangle
      if (i >= j) {
        lowerSum += mat[i][j];
      }
    }
  }

  console.log(upperSum + " " + lowerSum);
}
triangleSums(matrix);
