// Program to Read N Elements into an Array and Return the Array Along with Its Sum

/**
 * Reads array elements from user and returns
 * both the array and the sum of its elements
 *
 * @param {number} size - number of elements
 * @returns {{arr: number[], sum: number}}
 */

import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Please enter the size of array: "));

function sumOfArrElements(size) {
  if (!Number.isInteger(size) || size <= 0) {
    return "Invalid Input";
  }

  const arr = []; // Initialize an empty array
  let sum = 0;

  for (let i = 0; i < size; i++) {
    const elem = Number(prompt(`Please enter value of element ${i + 1}: `));
    arr.push(elem);
    sum += elem;
  }

  return { arr, sum };
}
console.log(sumOfArrElements(n));
