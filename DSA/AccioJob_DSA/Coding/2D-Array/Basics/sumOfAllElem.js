// Write a program to print sum of all elements in 2D array 

const matrix = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

function sumOfAllElem(mat) {
    let sum = 0;

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
        }
    }
    return sum;

}
console.log(sumOfAllElem(matrix))
