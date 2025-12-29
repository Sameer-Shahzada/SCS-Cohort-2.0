// -> Write a program to count the number of digits in a given integer using a while loop.

import promptSync from 'prompt-sync';
const prompt = promptSync();

const num = Number(prompt("Enter a number: "));

function countDigits(n) {
    if (!Number.isInteger(n) || n < 0) {
        return "Invalid Input";
    }

    if (n === 0) return 1;

    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }

    return count;
}
console.log(countDigits(num));

/*
    “I count the digits by repeatedly dividing the number by 10 until it becomes zero, incrementing a counter at each step. 
    This approach avoids string conversion and operates in linear time with constant space.”
*/