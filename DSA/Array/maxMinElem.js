// Write a program to find the max and min elements from the given array

function maxMinElem(arr) {
  // validation
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid Input";
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Invalid Input";
    }

    // separate two ifs
    // if (arr[i] > max) {
    //   max = arr[i];
    // }
    // if (arr[i] < min) {
    //   min = arr[i];
    // }

    // two ifs merged into else if
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  return { max, min };
}
console.log(maxMinElem([45, 23, 87, 67, 46]));
