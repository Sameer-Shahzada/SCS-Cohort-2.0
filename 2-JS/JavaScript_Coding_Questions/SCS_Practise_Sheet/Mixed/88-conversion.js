// 88. Convert numeric string to number and add 5.

/*
What the Problem Means
    You are given a numeric string, convert it into a number, then add 5, and return the result.

🔍 What is a “numeric string”?
A string that contains numbers:

"10"   // string
"25"
"100"
👉 These are strings, not numbers.

Example 
Input: "10"
Step 1: convert to number → 10
Step 2: add 5 → 15
Output: 15


*/

function addFive(str) {

    // let num = Number(str);
    let num = parseInt(str)

    if (isNaN(num)) {
        return "Invalid Input";
    }

    return num + 5;
}

console.log(addFive("10"));   // 15
console.log(addFive("abc"));  // Invalid Input