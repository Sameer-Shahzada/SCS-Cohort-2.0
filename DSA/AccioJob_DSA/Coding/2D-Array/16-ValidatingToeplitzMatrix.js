/*
Validating Toeplitz Matrix
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

Input Format
First line contains two integers, m and n which define the row and column size of the matrix respectively.

Next each of 'm' lines contain 'n' space separated integers that denote the matrix elements.

Output Format
Return true if a matrix is Toeplitz Matrix, else return false.

Example 1
Input

3 4
1 2 3 4
5 1 2 3
9 5 1 4
Output

false
Explanation

Every diagonal from top-left to bottom-right doesn't have the same value. (2,2,4) diagonal is where it becomes false.

Example 2
Input

2 3
3 7 3 
5 3 7 

Output

true
Explanation

Diagonals are [5], [3], [3,3] and [7,7]. As the all values in each diagonal from top-left to bottom right are equal, it is a toeplitz matrix.

Constraints
m == matrix.length

n == matrix[i].length

1 <= m, n <= 20

0 <= matrix[i][j] <= 99

Topics: 2D-Arrays
Companies
Microsoft Apple LinkedIn Facebook Airbnb Oracle Snapchat Uber Google

*/