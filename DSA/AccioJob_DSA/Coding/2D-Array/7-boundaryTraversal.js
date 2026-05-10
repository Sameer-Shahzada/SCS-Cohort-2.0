/*
  Boundary Traversal of matrix
Given an m*n matrix, print the boundary traversal of the matrix in clockwise order.

Input Format
First line contains the values m and n.

Next m lines contain n-spaced integers.

Output Format
Print the boundary traversal of the matrix in clockwise order.

Example 1
Input

2 3
1 2 3
1 5 3
Output

1
2
3
3
5
1
Explanation

We can see that while traversing in a clockwise fashion we go in the order of 1, 2, 3, 3, 5, 1.

Example 2
Input

3 4
5 4 6 3
1 4 3 5
5 1 9 6
Output

5
4
6
3
5
6
9
1
5
1
Explanation

We can see that while traversing in a clockwise fashion we go in the order of 5, 4, 6, 3, 5, 6, 9, 1, 5, 1.

Constraints
1 <= n <= 10^3

1 <= m <= 10^3

1 <= mat[i][j] <=10^5

Topics : 2D-Arrays
Companies : Amazon
*/

/*
🧠 Core Idea
    Boundary traversal means printing only the outer border of matrix in:
- clockwise direction

🔍 Traversal Order

For matrix:

1 2 3
4 5 6
7 8 9

Boundary traversal:

Top row      → 1 2 3
Right column → 6
Bottom row   → 8 7
Left column  → 4

Final: 1 2 3 6 9 8 7 4

✅ 4-Step Approach
1. Top row: ➡ left → right
2. Right column: ⬇ top → bottom
3. Bottom row: ⬅ right → left
4. Left column: ⬆ bottom → top


⚡ Complexity
Time: O(m + n)
Space: O(1)

*/
let matrix = [
  [5, 4, 6, 3],
  [1, 4, 3, 5],
  [5, 1, 9, 6],
];
function boundaryTraversal(mat) {
  let m = mat.length;
  let n = mat[0].length;

  // TOP ROW
  for (let j = 0; j < n; j++) {
    console.log(matrix[0][j]);
  }

  // RIGHT COLUMN
  for (let i = 1; i < m; i++) {
    console.log(matrix[i][n - 1]);
  }

  // BOTTOM ROW
  if (m > 1) {
    for (let j = n - 2; j >= 0; j--) {
      console.log(matrix[m - 1][j]);
    }
  }

  // LEFT COLUMN
  if (n > 1) {
    for (let i = m - 2; i >= 1; i--) {
      console.log(matrix[i][0]);
    }
  }
}

boundaryTraversal(matrix);
