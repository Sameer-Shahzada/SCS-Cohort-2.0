// Write a program to print the sum of all even and odd numbers in a range separately

import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(prompt("Enter any number: "));

// create a function
function evenOddSum(n) {
  if (!Number.isInteger(n) || n < 0) {
    console.log("Invalid Input");
    return;
  }

  let totalOddSum = 0;
  let totalEvenSum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      totalEvenSum += i;
    } else {
      totalOddSum += i;
    }
  }
  console.log("totalEvenSum: - ", totalEvenSum);
  console.log("totalOddSum: - ", totalOddSum);
}
evenOddSum(num);

/* 

When to use which?
✔ Use Number.isNaN() when:

Input comes from Number(prompt())

You want to confirm conversion succeeded

✔ Use Number.isInteger() when:

Problem demands integer input

Loop counters, array indices, counts

Interview-ready explanation (Say this confidently)

“I use Number.isInteger() to ensure the input is a valid integer and Number.isNaN() 
to prevent invalid numeric operations. This avoids silent bugs caused by type coercion.”

Final Takeaway (Very Important)
Check	                        Purpose
Number.isNaN(n)	           Valid number check
Number.isInteger(n)	       Integer-only validation
!Number.isInteger(n)	   Reject decimals & invalid
n < 0	                   Reject negative values

*/
