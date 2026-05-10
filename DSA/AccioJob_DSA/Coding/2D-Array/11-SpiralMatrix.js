/*

Spiral Matrix 2
You are given a matrix with N rows and M columns. You have to start iterating downwards on the first 
column and then continue spirally. Print an array containing the spiral of the matrix in the said 
manner.

NOTE: You need to complete the given function. The input and printing of output will be handled by 
the driver code.

Input Format:
The first line contains the number of test cases.
For each test case: The first line contains N and M.
The next N lines contain M integers each representing the elements of the matrix.

Output Format:
Print an array containing the spiral of the matrix in the said manner.

Example 1:
Input:

1
3 3

1 4 7
2 5 8
3 6 9

Output:
1 2 3 6 9 8 7 4 5

Explanation:
We iterate spirally and print each element.

Example 2:
Input:

1
3 3

1 2 3
4 5 6
7 8 9

Output:
1 4 7 8 9 6 3 2 5

Explanation:
We iterate spirally and print each element.

Constraints:
1 <= T <= 10
1 <= N,M <= 200\
0 <= A[i] <=1000000

Topics
2D-Arrays

*/

/*

This is a variation of the classic spiral traversal.
Most spiral questions start: → right
But THIS problem starts: ↓ down
That changes the traversal order.

🧠 Traversal Direction

You must move in this order:

↓ Down
→ Right
↑ Up
← Left

🔍 Example

Matrix:

1 2 3
4 5 6
7 8 9

Traversal:

1 4 7
8 9
6 3
2
5

Final: 1 4 7 8 9 6 3 2 5

🧠 Boundary Variables

We use:
top
bottom
left
right

*/

let matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

function spiralMatrix(mat) {
  let n = mat.length;
  let m = mat[0].length;

  let top = 0;
  let bottom = n - 1;

  let left = 0;
  let right = m - 1;

  let result = [];

  while (top <= bottom && left <= right) {
    // ↓ DOWN
    for (let i = top; i <= bottom; i++) {
      result.push(mat[i][left]);
    }
    left++;

    // → RIGHT
    for (let j = left; j <= right; j++) {
      result.push(mat[bottom][j]);
    }
    bottom--;

    // ↑ UP
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(mat[i][right]);
      }

      right--;
    }

    // ← LEFT
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result.push(mat[top][j]);
      }

      top++;
    }
  }

  console.log(result.join(" "));
}

spiralMatrix(matrix);
