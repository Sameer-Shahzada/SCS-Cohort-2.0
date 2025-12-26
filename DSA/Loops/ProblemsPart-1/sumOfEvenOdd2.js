// Write a program to print the sum of all even and odd numbers in a given range separately.
import promptSync from "prompt-sync";
const prompt = promptSync();

const startRange = Number(prompt("Enter range start point: "));
const endRange = Number(prompt("Enter range end point: "));

function sumEvenOddInRange(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    console.log("Invalid Input");
    return;
  }
  // swap if start is greater than end
  if (start > end) {
    // let temp = start;
    // start = end;
    // end = temp;

    [start, end] = [end, start];
  }
  let evenSum = 0;
  let oddSum = 0;
  
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  console.log("evenSum: ", evenSum);
  console.log("oddSum: ", oddSum);
}
sumEvenOddInRange(startRange, endRange);