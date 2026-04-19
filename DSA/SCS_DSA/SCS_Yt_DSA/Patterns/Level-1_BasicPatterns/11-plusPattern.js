//-> Write a program to print the plus pattern 

/*
⚠️ Core issue:
    A proper “plus (+)” pattern needs a single center row and column, which only exists when n is odd.

Step 1: Define center
    let mid = Math.floor(n / 2) + 1;
Step 2: Condition
    if (i == mid || j == mid)

*/

function plusPattern(n) {
    if (!Number.isInteger(n) || n % 2 === 0) {
        return "Please enter an odd number";
    }

    let mid = Math.floor(n / 2) + 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == mid || j == mid) {
                process.stdout.write("* ");
            } else {
                process.stdout.write("  "); // fix alignment
            }
        }
        console.log();
    }
}

plusPattern(5);