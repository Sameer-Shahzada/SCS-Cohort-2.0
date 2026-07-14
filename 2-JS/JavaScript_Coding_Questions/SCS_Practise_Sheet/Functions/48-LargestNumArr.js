//-> 48. Write a function that returns the largest number in an array.

/*

Core Strategy

- Assume the first element is the maximum
- Compare every remaining element with the current maximum
- Update the maximum when a larger value is found
- Return the final maximum

This ensures:
- Every element is checked exactly once
- No unnecessary operations
- Maximum efficiency

 
*/

let array = [23, 67, 89, 54, 34];

function largestElement(arr) {
  // validation
  if (!Array.isArray(arr) || arr.length === 0) {
    return `Invalid array`;
  }

  let max = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largestElement(array));
