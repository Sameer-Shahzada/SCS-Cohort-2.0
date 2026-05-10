/*
 Transpose matrix without new matrix 

*/

function matrixTranspose(mat, n) {

  for (let i = 0; i < n; i++) {

    for (let j = i + 1; j < n; j++) {

      // swap
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }

  return mat;
}

/*
🧠 Why j = i + 1 ?

Because:
- diagonal elements stay same
- avoid double swapping

🔥 Important Interview Concept
Transpose happens across:

Main diagonal
❌ Common Mistakes
Mistake	                                 Issue
Starting j = 0	                    double swaps
Using wrong indices	             incorrect transpose
Forgetting square matrix rule	    runtime issues

*/

