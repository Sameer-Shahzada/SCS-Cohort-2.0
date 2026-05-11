// Write a program to find the sum of primary diagonal by using single loop 

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

function sumOfPrimaryDiagonal(mat) {
    let n = mat.length; 
    let sumOfDiagonal = 0;

    for(let i = 0; i < n; i++) {
        sumOfDiagonal += mat[i][i];
    }
    console.log(sumOfDiagonal)

}
sumOfPrimaryDiagonal(matrix)