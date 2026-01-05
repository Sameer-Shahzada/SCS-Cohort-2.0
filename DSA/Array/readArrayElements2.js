//-> Program to Read N Elements from User and Store Them in an Array

import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Enter the number of array elements: "));

function readArrayElements(size) {
  if (!Number.isInteger(size) || size <= 0) {
    return "Invalid Input";
  }

  const arr = []; // Initialize an empty array

  for (let i = 0; i < size; i++) {
    const elements = Number(prompt(`Enter element ${i + 1}: `));
    arr.push(elements); // Add the element to the array
  }
  return arr; // return the populated array
}
console.log(readArrayElements(n));
