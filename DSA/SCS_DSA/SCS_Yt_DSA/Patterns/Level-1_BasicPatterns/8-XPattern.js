//-> Write a program to print the X pattern 

/*
i = 4 -> rows: 1 to 4 
j = 4 -> cols: 1 to 4

Trick: print stars on both diagonals
1-Main diagonal
    i == j
2-Secondary diagonal
i + j == n + 1
Final condition
condition - (i == j || i + j == n + 1)
*/

/*
APPROACH (clean + reusable)
Step 1: Treat pattern as a square grid
Rows → 1 to n
Columns → 1 to n

👉 You are no longer thinking:

“how many stars per row”

Instead think: “At position (i, j), should I print * or space?”

🔑 Core idea

👉 Triangle patterns = “count stars”
👉 X pattern = “check position”

*/

function XPattern(n) {
      /*
    Approach:
    - Traverse n x n grid
    - Print '*' on:
        1. Main diagonal → i == j
        2. Secondary diagonal → i + j == n + 1
    - Else print space
    */

    // outer loop: control rows
    for (let i = 1; i <= n; i++) {
        // inner loop: control cols and printing pattern 
        for (let j = 1; j <= n; j++) {
            if (i == j || i + j == n + 1) {
                process.stdout.write("* ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}
XPattern(5);

// Ask chatgpt which is better to use rows, cols or n here 

/*
✔ Best choice here: n

👉 Because:

It’s a square matrix
Rows = Columns = n
When to use what?
Variable	Use case
n	        square patterns
rows	    triangle / vertical control
cols	    rectangular patterns
*/