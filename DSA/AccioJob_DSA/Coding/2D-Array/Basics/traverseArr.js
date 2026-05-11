// Write a program to traverse the 2D Array

const matrix = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

function traverse2DArray(mat) {
  for (let i = 0; i < mat.length; i++) {
    let display = "";
    for (let j = 0; j < mat[i].length; j++) {
      display += mat[i][j] + " ";
    }
    console.log(display.trim());
  }
}
traverse2DArray(matrix);
