// Write a program to sum all odd numbers from 1 to n where n is input from user
import promptSync from "prompt-sync";
const prompt = promptSync();

const num = Number(
  prompt("Please enter the number up to which you want the loop execute. ")
);
let sum = 0;

function sumOfAllOddNumbers(num) {
  if (isNaN(num) || num < 1) {
    console.log("Invalid input");
    return; // Early return to stop further execution
  }

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log("Odd number:", i);
      sum += i;
    }
  }
  console.log("total sum of all odd numbers - ", sum);
}
sumOfAllOddNumbers(num);
