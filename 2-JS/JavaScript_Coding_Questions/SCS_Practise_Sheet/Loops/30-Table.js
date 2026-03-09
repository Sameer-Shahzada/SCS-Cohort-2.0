//-> 30. Print the multiplication table of 7 using a loop.

function printTable(num) {
    if(!Number.isInteger(num) || Number.isNaN(num)) {
        return 'Invalid Input';
    }

    for(let i = 1; i < 11; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
printTable(7)