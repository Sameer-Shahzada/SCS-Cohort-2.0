/*
Diagonal Traversal of a Matrix
Give a N * N square matrix, return all the elements of its anti-diagonals from top to bottom.

Input Format
First line contains N, representing the order of the 2D matrix.
Next N lines contains N spaced elements each representing matrix elements.

Output Format
Output in a sigle line, the Diagonal traversal of the matrix.
The traversal should start from the top right of the matrix in bottom right direction and should 
continue upto bottom left.

Example 1
Input

2
1 2
3 4
Output

2 1 4 3
Explanation:

Topmost anti-diagonal is [[2]]
Next anti-diagonal is [[1, 4]]
and the last anti-diagonal is [[3]]

Example 2
Input

3
1 2 3
4 5 6
7 8 9
Output

3 2 6 1 5 9 4 8 7
EXPLANATION

Topmost anti-diagonal is [[3]]
Next anti-diagonal is [[2, 6]]
Next anti-diagonal is [[1, 5, 9]]
Next anti-diagonal is [[4, 8]]
and the last-diagonal is [[7]]

CONSTRAINTS:
1 <= N <= 500
-10000 <= Mat[i][j] <= 10000

Topics
2D-Arrays
Arrays

*/

