// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const age = Number(prompt("Enter your age: "));

// function checkUsersAge(age) {
//     if(isNaN(age) || age < 0) {
//         console.log("Invalid age");
//         return; // Early return to stop further execution
//     }
//     if(age >= 18) {
//         console.log('You are eligible to vote');
//     } else {
//         console.log('You are not eligible to vote');
//     }
// }
// checkUsersAge(age)

//------------------------------------------------------------------------//

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(
//   prompt("Please enter the number up to which you want the loop execute. ")
// );

// let sum = 0;

// function sumOfAllNumbers(num) {
//   if (isNaN(num) || num < 1) {
//     console.log("Invalid input");
//     return; // Early return to stop further execution
//   }

//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       console.log("Odd number:", i);
//       sum += i;
//     }
//   }
//   console.log("total sum of all numbers - ", sum);
// }
// sumOfAllNumbers(num);

//------------------------------------------------------------------------//

// print numbers 

import promptSync from 'prompt-sync';
const prompt = promptSync();

const start = Number(prompt("Enter start number - "));
const end = Number(prompt("Enter end number - "));

function printNumbers(startNum, endNum) {

    // validate start number
    if (isNaN(startNum) || startNum < 0) {
        console.log("Start number is invalid");
        return;
    }

    // validate end number
    if (isNaN(endNum) || endNum < 0) {
        console.log("End number is invalid");
        return;
    }

    // validate range
    if (startNum > endNum) {
        console.log("Start number cannot be greater than end number");
        return;
    }

    // printing numbers
    for (let i = startNum; i <= endNum; i++) {
        console.log(i);
    }
}

printNumbers(start, end);
