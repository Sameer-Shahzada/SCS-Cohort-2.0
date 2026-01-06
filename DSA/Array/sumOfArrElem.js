// Write a program to calculate the sum of all elements in an array.

const arr = [1, 2, 3, 4];

function sumOfArrElements(elem) {
  let sum = 0;
  for (let i = 0; i < elem.length; i++) {
    sum += elem[i];
  }
  console.log(sum);
}
sumOfArrElements(arr);
