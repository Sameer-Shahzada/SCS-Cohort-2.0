/*

Alternate Manner Matrix Traversal
Given a 2D matrix mat of M rows and N columns , the task is to print the 2D matrix in an alternate manner.
Alternate manner denotes that the elements of the odd rows (first row, third row, etc) will be printed from left to right, and the elements of the even rows(second row, fourth row, etc.) will be printed from right to left.
For example, if M=3, then the first line will contain all the elements of the first row of the matrix from left to right. The second line will contain all the elements of the second row from right to left. 
The third line will contain all the elements of the third row from left to right.

Input Format
The first line contains two integers, M and N, representing the number of rows and columns, respectively.
The next M lines contain N space-separated integers, denoting the matrix.

Output Format
There will be 1 line with all the elements of the matrix after performing the alternate traversal. 
The elements will be separated by space.

Examples
Input
2 2
1 2
2 3

Output
1 2 3 2

Explanation
There are 2 rows in the matrix. In the first row from left to right the elements are :- 1 2. As this is an odd row, they will be printed from left to right. In the second row, from left to right the elements are :- 2 3. As this is an even row, elements will be printed from right to left.

Input
3 3
7 2 3
2 3 4
5 6 1

Output
7 2 3 4 3 2 5 6 1

Explanation
There are 3 rows in the matrix. In the first row from left to right the elements are :- 7 2 3. 
As this is an odd row, they will printed from left to right. In the second row from left to right the 
elements are :- 2 3 4. As this is an even row elements, will be printed from right to left. 
In the third row, from left to right the elements are :- 5 6 1. As this is an odd row they will printed 
from left to right.

Constraints
1<=M<=300
1<=N<=300

Topics: 2D-Arrays
Companies: Amazon

*/

let matrix = [
    [7, 2, 3],
    [2, 3, 4],
    [5, 6, 1],
];

function printElementsAlternately(mat) {
  
  let m = mat.length;  
  let n = mat[0].length;

  let result = [];

  for (let i = 0; i < m; i++) {
    // LEFT TO RIGHT
    if (i % 2 === 0) {
      for (let j = 0; j < n; j++) {
        result.push(mat[i][j]);
      }
    }

    // RIGHT TO LEFT
    else {
      for (let j = n - 1; j >= 0; j--) {
        result.push(mat[i][j]);
      }
    }
  }

  console.log(result.join(" "));
}

printElementsAlternately(matrix);
