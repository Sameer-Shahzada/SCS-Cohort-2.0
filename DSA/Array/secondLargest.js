// Write a program to find the second largest number from a given array

const array = [34, 24, 67, 90, 78, 54, 17];

// create a function to find the second largest number
function findSecondLargest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return "Invalid Input";
  }

  let max = Math.max(arr[0], arr[1]);
  let smax = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Invalid Input";
    }
    if (arr[i] > max) {
      smax = max;
      max = arr[i];
    } else if (arr[i] > smax && arr[i] !== max) {
      smax = arr[i];
    }
  }
  return smax;
}
console.log(findSecondLargest(array));
