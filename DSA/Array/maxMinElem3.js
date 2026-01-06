// Write a program to find the max & min elements from the given array by using reduce() method

function minMaxUsingReduce(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid Input";
  }

  return arr.reduce(
    (acc, curr) => {
      if (typeof curr !== "number") {
        throw new Error("Invalid Input");
      }

      return {
        min: curr < acc.min ? curr : acc.min,
        max: curr > acc.max ? curr : acc.max,
      };
    },
    { min: arr[0], max: arr[0] }
  );
}

console.log(minMaxUsingReduce([45, 23, 87, 67, 45]));
