//-> Program to Read N Elements from User and Store Them in an Array

import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Enter number of elements: "));

function readArrayElements(size) {
  if (!Number.isInteger(size) || size <= 0) {
    return "Invalid Input";
  }
  const arr = new Array(size);

  for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Enter value ${i + 1}: `));
  }

  return arr;
}
console.log(readArrayElements(n));
