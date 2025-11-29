// Write a program to check password with maximum 3 attempts

import promptSync from "prompt-sync";
const prompt = promptSync();

let attemps = 0;
let unlocked = false;
let pass = "sameer";
let password = prompt("Enter your password: ");

attemps++;

while(password !== pass) {
    if(attemps === 3) {
        console.log("Account locked due to multiple failed attempts");
        break;
    }
    password = prompt("Incorrect password. Try again: ");
    if(password === pass) {
        console.log("Password matched. Access granted.");
        unlocked = true;
        break;
    }
    attemps++;
}