/*
Print Matrix Column Wise
    Given a 2-D matrix A with N rows and M columns. Print the matrix in column-major order.

Your task is to complete the function printMatrixColumnwise which receives the input matrix, N, and M 
as its parameters and prints the matrix in column major order.

Input Format
The first line contains the number of test cases.
For each test case: The first line contains two integers N and M denoting the number of rows and columns respectively.
The next N lines contains M integers each denoting the elements of matrix A.

Output Format
For each test case print N*M space-separated integers, the elements of the matrix column wise in a 
single line.

Example 1
Input:

1
3 3
1 2 3
4 5 6
7 8 9

Output:
1 4 7 2 5 8 3 6 9

Explanation:
The elements of the matrix have been printed column wise.

Example 2
Input:

1
2 2
1 3
2 4
Output:

1 2 3 4

Explanation:
The elements of the matrix have been printed column wise.

Constraints
1 <= T <= 10
1 <= N,M <= 1000
0 <= A[i] <= 100000

Topics
2D-Arrays

*/

/*
This problem is the opposite of normal row-wise traversal.

🧠 Row-wise vs Column-wise

Normal matrix traversal (row-major)
for (i rows)
   for (j cols)

Output: 1 2 3 4 5 6 ...

Column-wise traversal (column-major)
for (j cols)
   for (i rows)

Output: 1 4 7 2 5 8 3 6 9

🔍 Example

Matrix:

1 2 3
4 5 6
7 8 9

Column-wise traversal:

Column 0: 1 4 7

Column 1: 2 5 8

Column 2: 3 6 9

Final: 1 4 7 2 5 8 3 6 9

------------------------------------

Whenever question says: column-wise

Immediately think:

OUTER LOOP → columns
INNER LOOP → rows

That is the entire trick.

*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printMatrixColumnwise(mat) {
  let result = [];
  let m = mat.length;
  let n = mat[0].length;

  // columns first
  for (let j = 0; j < m; j++) {
    // rows second
    for (let i = 0; i < n; i++) {
      result.push(mat[i][j]);
    }
  }

  console.log(result.join(" "));
  
}

printMatrixColumnwise(matrix);
