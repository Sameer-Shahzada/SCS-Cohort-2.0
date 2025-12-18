// Accept name and age from the user. Check if the user is valid voter or not.

import promptSync from "prompt-sync";
const prompt = promptSync();

// Inputs from user
const name = prompt("Enter your name: ");
const age = Number(prompt("Enter your age: "));

// Function to check voter eligibility
function isValidVoter(v_name, v_age) {
  if (Number.isNaN(v_age) || v_age < 0) {
    return "Invalid age";
  }

  if (v_age >= 18) {
    return `${v_name} is eligible to vote`;
  } else {
    return `${v_name} is not eligible to vote`;
  }
}

console.log(isValidVoter(name, age));
