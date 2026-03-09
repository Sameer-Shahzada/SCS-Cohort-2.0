/**
 * Prints a square star pattern
 * @param {number} rows - number of rows
 * @param {number} cols - number of columns
 */

function squarePattern(rows, cols) {

    // Controls the number of rows
    for (let i = 0; i < rows; i++) {

        // Prints stars in each column of the row
        for (let j = 0; j < cols; j++) {
            process.stdout.write("* ");
        }

        // Move to next line after each row
        console.log("");
    }
}

squarePattern(4, 4);

/*
Time & Space Complexity

Time Complexity
    Outer loop → rows
    Inner loop → cols

Total operations: rows × cols

So, Time Complexity = O(rows × cols)

Space Complexity
No extra memory used.
Space Complexity = O(1)
*/