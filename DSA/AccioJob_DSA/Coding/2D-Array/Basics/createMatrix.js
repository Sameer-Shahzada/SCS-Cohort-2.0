// Create a 5x5 cross square matrix which consisting "*"

function squareMatrix() {
    for(let i = 0; i < 5; i++) {
        let display = "";
        for(let j = 0; j < 5; j++) {
            display += "*";
        }
        console.log(display)
    }
}
squareMatrix()