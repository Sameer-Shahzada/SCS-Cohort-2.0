// print number from 1 to 10 using for loop 
// for(let i = 1; i < 11; i++) {
//     console.log(i)
// }

// print number from 10 to 1 using while loop
// let i = 10;
// while(i >= 1) {    
//     console.log(i);
//     i--;
// }

// print even numbers from 1 to 20
// for(let i = 1; i < 21; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }

// print odd numbers from 1 to 15 using while loop 
// let i = 1;
// while(i < 16) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
//     i++;
// }

// print the multiplication of table 5 -  x 1 = 5

// for(let i = 1; i < 11; i++) {
//     console.log(`5 x ${i} =`, 5 * i)
// }

// find the sum of numbers from 1 to 100 using loop.

// let sum = 0;
// for(let i = 1; i < 101; i++) {
//     sum += i;
// }
// console.log(sum)

// print all numbers between 1 to 50 that are divisible by 3
// for(let i = 1; i < 51; i++) {
//     if(i % 3 == 0) {
//         console.log(i)
//     }
// }

// Ask the user for a number and print whether each number from 1 to that number is even or odd

function evenOdd(num) {
    for(let i = 1; i <= num; i++) {
        if(i % 2 == 0) {
            console.log(`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
    }    
}
evenOdd(4)

// count how many numbers between 1 to 100 are divisible by both 3 and 5
let count = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i);
        count ++;
    }                                              
}
console.log(count)

