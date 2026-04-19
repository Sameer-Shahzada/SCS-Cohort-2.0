//-> Write a program to print the rectangle pattern

/*
Pattern Example

    ******
    ******
    ******
    ******
    
*/
function rectanglePattern (rows, cols) {
    // outer loop to control the number of rows 
    for(let i = 0; i < rows; i++) {
        // inner loop to control the number of cols
        // Always pattern printing logic inside the inner loop
        for(let j = 0; j < cols; j++) {
            // to print the stars in same line 
            process.stdout.write("* ");
        }
        // to move on to the next line just after printing each row 
        console.log();
    }
}
rectanglePattern(4, 6)