/*
Fill Rows in Boolean Matrix
You are given a matrix Mat of m rows and n columns. The matrix is boolean so the elements of the 
matrix can only be either 0 or 1.

Now, if any row of the matrix contains a 1, then you need to fill that whole row with 1. After doing the 
mentioned operation, you need to return the modified matrix.

Your task is to complete the function BooleanMatrixProblem which takes m, n and the input array as 
the parameter and returns the modified matrix as specified in the question.

Input Format
The first line of contains m and n denoting number of rows and number of columns respectively.

Then next m lines contain n elements each denoting the elements of the matrix.

Output Format
Return the modified matrix as specified above.

Example 1
Input

5 4
1 0 0 0
0 0 0 0
0 1 0 0
0 0 0 0
0 0 0 1

Output
1 1 1 1
0 0 0 0
1 1 1 1
0 0 0 0
1 1 1 1

Explanation
rows = 5 and columns = 4

The given matrix is

1 0 0 0
0 0 0 0
0 1 0 0
0 0 0 0
0 0 0 1

Evidently, the first row contains a 1 so fill the whole row with 1. The third row also contains a 1 so that row will be filled too. Finally, the last row contains a 1 and therefore it needs to be filled with 1 too.
The final matrix is

1 1 1 1
0 0 0 0
1 1 1 1
0 0 0 0
1 1 1 1

Example 2
Input

2 2
1 0 
0 1 

Output

1 1 
1 1 

Explanation
rows = 2 and columns = 2
The given matrix is

1 0 
0 1

Evidently, the first row contains a 1 so fill the whole row with 1. The second row also contains a 1 so that row will be filled too. The final matrix is

1 1 
1 1

Constraints
1 <= m, n <= 300

Mat[i][j] ∈ {0,1}

Topics
2D-Arrays
Companies
Microsof
*/

/*

Core Idea 
    If a row contains: at least one 1
👉 convert entire row into: 1 1 1 1 ...

🔍 Example
Input:
0 1 0
0 0 0

Row 0 contains 1
👉 make whole row:

1 1 1


✅ Best Approach
Step 1:
    Find which rows contain 1

Step 2:
    Fill those rows completely with 1
*/

let matrix = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];

function BooleanMatrixProblem(mat) {
  let m = mat.length; // no. of rows
  let n = mat[0].length; // first row length = number of columns

  // stores rows that contain at least one 1
  let markedRows = [];

  // STEP 1: Find rows containing 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        markedRows.push(i);
        break; // no need to check remaining columns
      }
    }
  }

  // STEP 2: Fill marked rows with 1
  for (let i = 0; i < markedRows.length; i++) {
    let row = markedRows[i];

    for (let j = 0; j < n; j++) {
      mat[row][j] = 1;
    }
  }

  return mat;
}

console.log(BooleanMatrixProblem(matrix));
