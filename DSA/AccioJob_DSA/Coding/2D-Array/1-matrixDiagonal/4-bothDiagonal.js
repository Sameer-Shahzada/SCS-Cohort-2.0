function bothDiagonal(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    console.log(mat[i][i]);           // primary
    console.log(mat[i][n - 1 - i]);   // secondary
  }
}