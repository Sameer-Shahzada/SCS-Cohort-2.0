let matrix = [
    [10, 15, 20],
    [30, 80, 11],
    [12, 16, 18],
]

function matrixDiagonal(mat) {
    // control rows
    for(let i = 0; i < mat.length; i++) {
        // control cols
        for(let j = 0; j < mat[i].length; j++) {
            if(i == j) {
                console.log(mat[i][j]);
            }
        }
    }
}
matrixDiagonal(matrix)