/*
Square Matrix Multiplication
Given two square Matrices A and B each of N rows and N columns, you need to multiply the two matrices. 
Return the product matrix.

NOTE You need to complete the given function. The input and printing of output will be handled by the driver 
code.

Input Format:
The first line contains the number of test cases.

For each test case: The first line has 'N', the dimensions of the matrices.

The next N rows will have N elements each. These are the elements of matrix A.

The next N rows will have N elements each. These are the elements of matrix B.

Output Format:
For each test case return your answer.

Example 1:
Input:

1
2
Matrix
1 1
1 1
2 2 
2 2

Output:

4 4
4 4

Explanation:
We multiply the two matrices.

Example 2:
Input:

1
3
Matrix
1 1 1
2 2 2
3 3 3

1 1 1
2 2 2
3 3 3

Output:
6 6 6
12 12 12
18 18 18

Explanation:
We multiply the two matrices.

Constraints:
1 <= T <= 10
1 <= N <= 50

Topics
Math 2D-Arrays Operators

*/

/*
🧠 Core Formula
For result matrix C: C[i][j] = Σ (A[i][k] * B[k][j])

👉 Fix row i from A
👉 Fix column j from B
👉 Multiply across k


A row → [a b c]
B col ↓
         [x]
         [y]
         [z]

C[i][j] = a*x + b*y + c*z

*/
let matrix1 = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];

let matrix2 = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];

function matrixMultiplication(mat1, mat2) {

    let n = mat1.length;

    // Result matrix
    let result = [];

    for (let i = 0; i < n; i++) {

        result[i] = []; // // to create a NEW ROW inside result matrix

        for (let j = 0; j < n; j++) {

            let sum = 0;

            for (let k = 0; k < n; k++) {

                sum += mat1[i][k] * mat2[k][j];
            }

            // IMPORTANT STEP
            result[i][j] = sum;
        }
    }

    return result;
}

console.log(matrixMultiplication(matrix1, matrix2));


/*
🧠 Understand the 3 Loops Properly
Outer Loop → Rows of matrix1
for(i)

👉 Which row are we processing?

Middle Loop → Columns of matrix2
for(j)

👉 Which column are we processing?

Inner Loop → Actual multiplication
for(k)

👉 Multiply row elements with column elements

🔥 Most Important Formula
result[i][j] += mat1[i][k] * mat2[k][j]
*/