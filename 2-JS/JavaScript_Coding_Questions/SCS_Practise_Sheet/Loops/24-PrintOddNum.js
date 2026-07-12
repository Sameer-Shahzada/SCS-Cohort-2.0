//-> 24. Print odd numbers from 1 to 20 using continue.

function printOddNumbers(start, end) {
    for (let i = start; i < end; i++) {
        if (i % 2 !== 0) {
            console.log(i)
            continue;
        }
    }
}
printOddNumbers(1, 21);


//-> 24. Print odd numbers from 1 to 20 without continue keyword.

// function printOddNumbers(start, end) {
//     for (let i = start; i < end; i++) {
//         if (i % 2 !== 0) {
//            console.log(i)
//         }       
//     }
// }
// printOddNumbers(1, 21);