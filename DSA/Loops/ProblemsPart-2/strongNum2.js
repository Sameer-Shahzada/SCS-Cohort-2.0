/*
Strong Number 
    A Strong Number is a number in which:- 
                Sum of the factorials of its digits = the original number
Example:
145 → 1! + 4! + 5! = 1 + 24 + 120 = 145 

*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Enter a number: "));

function strongNumber(num) {

    if(!Number.isInteger(num) || num <= 0) {
        return "Invalid Input";
    }
    
  let temp = num; // store the original number into temp variable to use it later for comparison
  /*
    - Stores a copy of n in temp.
    - This is necessary because temp will be modified during digit extraction.
    - The original number n must remain unchanged for comparison later.

  */
  let sum = 0; // to store the sum of factorials of digits

  while (temp > 0) {
    /* Loop runs until all digits of temp are processed.
                            Each iteration processes one digit. */
    let digit = temp % 10; // to extract the last digit of temp number
    let fact = 1; // initialize factorial value, fact will store the factorial of the extracted digit

    // Calculates factorial of the extracted digit.
    for (let i = 1; i <= digit; i++) {
      fact *= i;
    }

    sum += fact; // Adds the factorial of the current digit to sum.
    temp = Math.floor(temp / 10);
    /**
     Removes the last digit from temp.
     Example: 145 → 14
     Math.floor ensures an integer result.
     */
  }

  return sum === num ? "Strong Number" : "Not a Strong Number";
}
console.log(strongNumber(n));

/* Flow Summary 

1-Flow Summary (How the Program Works)
2-Copy the number
3-Extract each digit
4-Calculate factorial of the digit
5-Add factorial to sum
6-Remove digit
7-Compare final sum with original number

*/