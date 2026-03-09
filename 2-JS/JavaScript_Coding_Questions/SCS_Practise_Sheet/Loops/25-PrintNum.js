//-> 25. Print numbers from 5 to 1 using do...while. 

function printNumbers(start, end) {
    let i = start;
    do {
        console.log(i);
        i--;
    } while (i >= end)
}
printNumbers(5, 1)