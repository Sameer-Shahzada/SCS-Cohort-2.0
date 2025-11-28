
/* Write a program to check if user is above 18 then eligible to vote otherwise not eligible and 
take input from user */

import promptSync from 'prompt-sync';
const prompt = promptSync();

const age = Number(prompt("Enter your age: "));

function checkUsersAge(age) {
    if(isNaN(age) || age < 0) {
        console.log("Invalid age");
        return; // Early return to stop further execution
    }
    if(age >= 18) {
        console.log('You are eligible to vote');
    } else {
        console.log('You are not eligible to vote');
    }
}
checkUsersAge(age)