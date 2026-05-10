let matrix = [
  [10, 15, 20],
  [30, 80, 11],
  [12, 16, 18],
];

function bothDiagonal(mat) {
  let n = mat.length;

  // Primary diagonal
  for (let i = 0; i < n; i++) {
    console.log(mat[i][i]);
  }

  // Secondary diagonal
  for (let i = 0; i < n; i++) {
    console.log(mat[i][n - 1 - i]);
  }
}

bothDiagonal(matrix);