/*
Strong Number 
    A Strong Number is a number in which:- 
                Sum of the factorials of its digits = the original number
Example:
145 → 1! + 4! + 5! = 1 + 24 + 120 = 145 

//-> Write a program to check whether a given number is a Strong Number or not by using nested for loops.
*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Enter a number:"));

// create a function 
function strongNumber(num) {
    if(!Number.isInteger(num) || num <= 0) {
        return 'Invalid Input';
    }

    let sum = 0; // to store the sum of factorials of digits

    // Outer loop: extracts digits one by one
    for(let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
        let digit = temp % 10; // to extract the last digit of temp number
        let fact = 1;

        // Inner loop: calculates factorial of the digit
        for(let i = 1; i <= digit; i++) {
            fact *= i;
        }
        sum += fact; // Adds the factorial of the current digit to sum.
    }
    return sum === num ? "Strong Number" : "Not a Strong Number";
}

console.log(strongNumber(n));