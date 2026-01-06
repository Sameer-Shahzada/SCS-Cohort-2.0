// Write a program to find the max and min elements from the given array

function maxMinElem(arr) {
  // validation
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid Input";
  }

   return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}
console.log(maxMinElem([45, 23, 87, 67, 46]));
