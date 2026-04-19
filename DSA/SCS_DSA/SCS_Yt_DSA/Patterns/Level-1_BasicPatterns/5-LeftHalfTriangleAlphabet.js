// Write a program to print the alphabetically pattern (LeftHalfTrianlge)

/*
    - No of rows
    - inner loop depends on outer loop index 
    - pattern printing should inside inner loop 
    - move on to the next line after each row.

    A
    A B
    A B C
*/

function LeftHalfTriangleAlphaPattern(rows) {
    // outer loop to control the no of rows 
    for(let i = 1; i < rows; i++) {
        // inner loop to control printing pattern and depend on outer loop iteration 
        let ascii = 65; 
        for(let j = 1; j < i; j++) {
            process.stdout.write(String.fromCharCode(ascii)  + " ");
            ascii++;
        }
        // move on to the next line 
        console.log();
    }

}
LeftHalfTriangleAlphaPattern(5)

/*
    Increament alphabet characters are not allowed in javascript directly.
    So, we need to print ascii numbers first and need to convert the ascii values into character by using 
    String.fromCharCode() method.
*/