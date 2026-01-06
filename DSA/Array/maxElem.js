// Write a program to find the max (greater) element from array

/**
 
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
function findMaxElem(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid Input";
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Invalid Input";
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxElem([23, 56, 89, 22, 45]));
