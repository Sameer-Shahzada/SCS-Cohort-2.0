let matrix = [
    [10,15,20,33],
    [30,80,11,44],
    [12,16,18,55],
]

function bothDiagonal(mat) {  
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(i == j) {
                console.log(mat[i][j]);
            }
        }
    }

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if((i + j) === (mat.length - 1)) {
                console.log(mat[i][j]);
            }
        }
    }
}

bothDiagonal(matrix)