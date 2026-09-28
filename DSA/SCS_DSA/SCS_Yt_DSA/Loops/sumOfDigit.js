// Write a program to calculate the sum of digit by using while loop & for loop.

function sumOfDigits(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid Input";
  }

  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumOfDigits(1234));