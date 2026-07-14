//-> 47. Write a function to reverse a string without using extra array

function reverseString(str) {

  // validation
  if (typeof str !== "string") {
    return "";
  }

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
console.log(reverseString("Sameer"));

/*
Why is this nice?
- No split()
- No second array
- Simple logic
- Interview-friendly
*/
