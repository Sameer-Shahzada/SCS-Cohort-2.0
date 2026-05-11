// Write a program to find the sum of primary diagonal 

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

function sumOfPrimaryDiagonal(mat) {

    let n = mat.length; 
    let sumOfDiagonal = 0;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i == j) {
                // console.log(mat[i][j])
                sumOfDiagonal += mat[i][j];
            }
        }
    }
    console.log(sumOfDiagonal)

}
sumOfPrimaryDiagonal(matrix)