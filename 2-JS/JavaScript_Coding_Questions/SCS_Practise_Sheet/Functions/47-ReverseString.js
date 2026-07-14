//-> 47. Write a function to reverse a string.

function reverseString(str) {
  // validation
  if (typeof str !== "string") {
    return "";
  }

  /*
        above validation covers 
        - ReverseString()
        - ReverseString(null)
        - ReverseString(123)
    */

  let arr = str.split("");  // convert given string into array
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed.join("");
}

console.log(reverseString("Sameer"));
