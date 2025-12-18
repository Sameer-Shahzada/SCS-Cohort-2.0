// Accept three numbers and print the greatest among them.

import promptSync from 'prompt-sync';
const prompt = promptSync();

// Accept three numbers
const x = Number(prompt("Enter the value of x: "));
const y = Number(prompt("Enter the value of y: "));
const z = Number(prompt("Enter the value of z: "));

// Function to check the greatest number
function checkGreaterNumber(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return `${num1} is greatest`;
    }
    else if (num2 > num1 && num2 > num3) {
        return `${num2} is greatest`;
    }
    else if (num3 > num1 && num3 > num2) {
        return `${num3} is greatest`;
    }
    else if (num1 === num2 && num1 > num3) {
        return `${num1} is greater (x and y are equal)`;
    }
    else if (num1 === num3 && num1 > num2) {
        return `${num1} is greater (x and z are equal)`;
    }
    else if (num2 === num3 && num2 > num1) {
        return `${num2} is greater (y and z are equal)`;
    }
    else {
        return "All three numbers are equal";
    }
}

// Function call
console.log(checkGreaterNumber(x, y, z));