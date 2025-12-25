/*
Print Natural Numbers from 1 to N 
Given an integer n, 
print all natural numbers from 1 to n. 
Example 1 
Sample Input 5 
Sample Output 1 2 3 4 5 
Example 2 
Sample Input 
3 
Sample Output 1 2 3 
Input Format
 - The input consist of a single integer n. 
 Output Format - Print all natural numbers from 1 to n, separated by a single space. 
 - For JavaScript, use process.stdout.write(). 
 Explaination For Sample Input 1, n = 5. 
 The function will recrusively call itself and print all numbers starting from 1 up to n. 
 Hence the output is 1 2 3 4 5. 
 Constraints - 1 <= n <= 10 power 6
*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Enter a natural number: "));

function printNaturalNumgers(num) {
  if (!Number.isInteger(num) || num < 1) {
    console.log("Invalid Input");
    return;
  }
  for (let i = 1; i <= num; i++) {
    process.stdout.write(i.toString());
    if (i < n) {
      process.stdout.write(" ");
    }
  }
}
printNaturalNumgers(n);