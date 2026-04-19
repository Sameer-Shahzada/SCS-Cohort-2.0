//-> Write a program to print the V pattern 

/*
i = 4 -> rows: 1 to 4 
j = 4 -> cols: 1 to 4

Trick: print stars on both diagonals
condition - (i == j || i + j == 2*n)
*/

function VPattern(n) {
    // outer loop: control rows
    for (let i = 1; i <= n; i++) {
        // inner loop: control cols and printing pattern 
        for (let j = 1; j <= 2*n-1; j++) {
            if (i == j || i + j == 2*n) {
                process.stdout.write("* ");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}
VPattern(5);

// Ask chatgpt which is better to use rows, cols or n here

// I have to revise all of these pattern once more then commit the code 

