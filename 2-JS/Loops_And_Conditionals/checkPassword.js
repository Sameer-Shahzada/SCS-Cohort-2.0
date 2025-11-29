// Write a program to check if the entered password matches the stored password

import promptSync from "prompt-sync";
const prompt = promptSync();

let password = "Sameer123";

const userPass = prompt("Enter your password: ");
function checkPassword(userPassword) {
  if (password === userPassword) {
    console.log("matched");
  } else {
    console.log("not-matched");
  }
}
checkPassword(userPass);