// Accept a year and check if it is a leap year or not.

/* 
If interviewer asks “Explain leap year logic”, say:

    - A year is a leap year if it is divisible by 400,
                        OR 
    - It is divisible by 4 AND not divisible by 100
    Note - This handles century years correctly.
*/

import promptSync from "prompt-sync";
const prompt = promptSync();

// inputs from user
const year = Number(prompt("Enter any year: "));

// create a function to check given year is leap or not
function isLeapYear(yr) {
  // validations
  if (Number.isNaN(yr) || yr <= 0) {
    return `Invalid year`;
  }
  // leap year logic
  if (yr % 400 === 0 || (yr % 4 === 0 && yr % 100 !== 0)) {
    return `${yr} is a leap year`;
  } else {
    return `${yr} is not a leap year`;
  }
}
console.log(isLeapYear(year));
