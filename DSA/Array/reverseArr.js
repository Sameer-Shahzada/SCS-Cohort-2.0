// Write a program to print the reverse array
function reverseArr(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Input";
  }

  const reversed = new Array(arr.length);
  let i = arr.length - 1;

  for (let j = 0; j < arr.length; j++) {
    reversed[j] = arr[i];
    i--;
  }

  return reversed;
}

const array = [10, 20, 30, 90, 100];
console.log(reverseArr(array));
