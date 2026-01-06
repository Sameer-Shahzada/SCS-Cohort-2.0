// Write a program to find the second smallest number from a given array

function findSecondSmallest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return "Invalid Input";
  }

  let min = Math.min(arr[0], arr[1]);
  let smin = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Invalid Input";
    }

    if (arr[i] < min) {
      smin = min;
      min = arr[i];
    } else if (arr[i] < smin && arr[i] !== min) {
      smin = arr[i];
    }
  }

  return smin;
}

const array = [34, 24, 67, 90, 78, 54, 17];
console.log(findSecondSmallest(array));
