/* 

Transpose of Matrix
    Write a program to find the transpose of a square matrix of size N*N. Transpose of a matrix is obtained by 
    changing rows to columns and columns to rows.

Expected Time Complexity: O(N * N)

Expected Auxiliary Space: O(1)

Input Format
    The first line contains an integer N.
    The next N lines contains N spaced integers each, elements of matrix.

Output Format
    Print the transposed matrix.

Example 1
Input

4
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4

Output
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4

Explanation
The rows and columns are switched.
Example 2
Input

5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15 
16 17 18 19 20
21 22 23 24 25

Output
1 6 11 16 21
2 7 12 17 22
3 8 13 18 23
4 9 14 19 24
5 10 15 20 25

Explanation
The rows and columns are switched. For example: 6 was at position 0, 1 in original matrix. In the transposed matrix, it is at position 1, 0.
Constraints
1 <= N <= 100

-10^3 <= mat[i][j] <= 10^3

Topics
Math 2D-Arrays
Companies
Walmart Global Tech MakeMyTrip Amazon InfoEdge

*/

/* 
    Approach 

Core Idea of Transpose

Original: mat[i][j]
Transpose: mat[j][i]

👉 Row becomes column
👉 Column becomes row

🔍 Example

Original:

1 2
3 4

Transpose:

1 3
2 4

*/

// -> Simple Solution using new matrix

let matrix = [
  [1,1,1],
  [2,2,2],
  [3,3,3]
]

function transposeMatrix(mat) {
  let n = mat.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = [];

    for (let j = 0; j < n; j++) {
      result[i][j] = mat[j][i];
    }
  }

  return result;
}

console.log(transposeMatrix(matrix))

/*
Suppose: mat[1][0] = 6
Then: result[0][1] = 6

👉 indices swapped: [i][j] → [j][i]


Complexity
Time: O(n²)
Space: O(n²)


*/