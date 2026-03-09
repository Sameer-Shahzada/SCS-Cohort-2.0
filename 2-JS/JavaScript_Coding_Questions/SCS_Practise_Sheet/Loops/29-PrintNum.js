//-> 29. Print numbers between 1–100 divisible by 5.

function printNumbers(start, end) {
    for(i = start; i <= end; i++) {
        if(i % 5 === 0) {
            console.log(i);
        }
    }
}
printNumbers(1, 100)