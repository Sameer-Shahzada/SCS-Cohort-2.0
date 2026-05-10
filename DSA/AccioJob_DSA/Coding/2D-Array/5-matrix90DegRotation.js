/*

Matrix 90 Degree Rotation
You are given a n x n 2-D matrix representing an image. Your task is to rotate the image by 90 degrees in 
the clockwise direction.

Input Format
The first line will contain two integers n and n again.

The next n lines contain n integers each representing the matrix.

Output Format
Print a matrix that is rotated by 90 degrees in the clockwise direction.

Example 1
Input

2 2 
1 2
2 3 

Output
2 1 
3 2

Explanation
We do a 90 degree clockwise rotation of the matrix.

Example 2
Input
3 3

7  2  3 
2  3  4 
5  6  1 

Output
5 2 7
6 3 2
1 4 3

Explanation
We do a 90 degree clockwise rotation of the matrix.

Constraints
1 <= n <= 100

Topics
Basics 2D-Arrays
Companies
ServiceNow Facebook ByteDance PayTM Amazon Bloomberg Oracle AdobeCisco Quora VMware Apple Databricks Uber 
Google Microsoft eBay Nvidia

*/

/*
-> This is one of the most important matrix interview problems.

🧠 Core Trick

To rotate matrix 90° clockwise:

STEP 1 → Transpose
STEP 2 → Reverse every row

🔍 Example

Original:
1 2 3
4 5 6
7 8 9

Step 1 → Transpose
1 4 7
2 5 8
3 6 9

Step 2 → Reverse each row
7 4 1
8 5 2
9 6 3

👉 Final rotated matrix

*/

// rotate matrix 

// transpose 
// reverse rows

let matrix = [
  [7, 2, 3],
  [2, 3, 4],
  [5, 6, 1]
];

function rotateMatrix(mat) {

    let n = mat.length;
    let result = [];

    // TRANSPOSE
    for (let i = 0; i < n; i++) {

        // to create a NEW ROW inside result matrix
        result[i] = [];

        for (let j = 0; j < n; j++) {
            result[i][j] = mat[j][i];
        }
    }

    // REVERSE EACH ROW
    for (let i = 0; i < n; i++) {
        result[i].reverse();
    }

    return result;
}

console.log(rotateMatrix(matrix));