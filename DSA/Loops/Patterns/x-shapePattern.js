//-> Write a program to print an X shape pattern of a given number n using loops.

function printXShapePattern(n) {
    if (!Number.isInteger(n) || n < 1 || n % 2 === 0) {
        return 'Invalid Input';
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            // Condition for X shape
            if (j === i || j === n - i - 1) {
                process.stdout.write('*');
            } else {
                process.stdout.write(' ');
            }
        }
        console.log();
    }
}

printXShapePattern(7)
