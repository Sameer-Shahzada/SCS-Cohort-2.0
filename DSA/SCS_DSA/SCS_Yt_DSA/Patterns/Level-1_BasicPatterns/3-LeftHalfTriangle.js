//-> Write a program to print the Left Half Triangle Pattern (Increasing) Exact Name - Right Angled Triangle Pattern 
/*
Pattern Example 

    *
    * *
    * * *
    * * * * 

*/
function LeftHalfTrianglePattern (rows) {
    // outer loop to control the number of rows
    for(let i = 1; i < rows; i++) {
        // inner loop to control the number of cols
        // And printing pattern logic 
        for(let j = 0; j < i; j++) {
            process.stdout.write("* ");
        }
        // to move on the next line 
        console.log()

    }
}
LeftHalfTrianglePattern(5)