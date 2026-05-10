
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

    let rows1 = mat1.length;
    let cols1 = mat1[0].length;

    let rows2 = mat2.length;
    let cols2 = mat2[0].length;

    if (cols1 !== rows2) {
        return "Multiplication not possible";
    }

    let result = Array.from(
        { length: rows1 },
        () => Array(cols2).fill(0)
    );

    for (let i = 0; i < rows1; i++) {

        for (let j = 0; j < cols2; j++) {

            for (let k = 0; k < cols1; k++) {

                result[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }

    return result;
}

console.log(matrixMultiplication(matrix1, matrix2));