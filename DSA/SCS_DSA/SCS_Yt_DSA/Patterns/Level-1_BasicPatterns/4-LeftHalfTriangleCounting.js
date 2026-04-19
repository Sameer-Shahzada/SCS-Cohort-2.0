//-> Write a program to print the Left Half Triangle Pattern with counting 

/*
    Points to always remember in pattern programming 
    - no. of rows 
    - no. of cols 
    - always printing pattern inside the inner loop 
    - move on to the next line after printing each row
*/

/*
LeftHalfTrianlge 
- no. of rows only 
- no. of cols depend on the outer loop index 
- always printing pattern inside the inner loop 
- move on to the next line after printing each row

    1
    1 2
    1 2 3
    1 2 3 4

*/

function leftHalfTriangleCounting(rows) {
    // outer loop to control the rows 
    for (let i = 1; i < rows; i++) {
        // inner loop to control cols and printing logic 
        
        for (let j = 1; j < i; j++) {
            process.stdout.write(j + " ");
        }
        // move on to the next line 
        console.log()
    }
}
leftHalfTriangleCounting(6)