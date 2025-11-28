// Write a program to print numbers from user defined range

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
