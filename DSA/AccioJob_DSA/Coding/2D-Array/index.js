let mat = [
    [10,15,20],
    [30,80,11],
    [12,16,18]
]

let mat2 = []

for(let i = 0; i < mat.length; i++) {
    mat2.push([]);
    for(let j = 0; j < mat[i].length; j++) {
        mat2[i].push(0);
    }
}
console.log(mat2)

// transpose a matrix

for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[i].length; j++) {
        mat2[j][i] = mat[i][j];
    }
}

console.log(mat2)