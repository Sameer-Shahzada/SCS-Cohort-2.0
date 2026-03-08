/* Write a program to swap two numbers with using a temporary variable
    - Take input from the user
    - Also Prove this statement:  
        A function should return a result so you can use that result later in your program.
*/

import promptSync from "prompt-sync";
const prompt = promptSync();

function swapNumbers(a, b) {
  console.log(`Before Swapping: a = ${a}, b = ${b}`);

  // swapping logic
  let temp = a;
  a = b;
  b = temp;

  console.log(`After Swapping: a = ${a}, b = ${b}`);

  // Returning swapped values so they can be used later in the program
  return { a, b };

  /*
    👉 Because the original variables did NOT change.
    Inside the function, a and b were copies, not the real variables.
  */
}

let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));

// use parseInt to convert string input to number because prompt returns string

if (isNaN(a) || isNaN(b)) {
  console.log("Invalid number");
} else {
   // Capture the returned swapped values
  const result = swapNumbers(a, b);

  // Now we can USE the swapped result later in the program
  console.log("Using swapped values later in program:");
  console.log("New a:", result.a);
  console.log("New b:", result.b);
}

console.log("Original input values remain unchanged:", a, b);

/* 
Additional Note 
    With return statement - Your function swaps numbers AND allows you to use the swapped values later.
    Without return statement - Your function swaps numbers ONLY inside the function temporarily.

🔥 Why return matters?
- We can store the result
- We can use it later
- It's reusable
- It's professional coding
- It aligns with functional programming
- It avoids tight coupling (printing inside function)

*/
