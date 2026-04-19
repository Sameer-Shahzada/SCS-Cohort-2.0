//-> Left Half Triangle (Decreasing)

/*

* * * * *
* * * *
* * *
* *
*

*/
function InvertedLeftHalfTriangle(rows) {
    // outer loop : no of rows
    for(let i = 1; i <= rows; i++) {
        // inner loop: no of cols
        // And printing pattern 
        for(let j = 1; j <= rows - i + 1; j++) {
            // another way 
            // let j = rows; j >= i; j--

            process.stdout.write('* ');
        }
        console.log()
    }
}
InvertedLeftHalfTriangle(5)