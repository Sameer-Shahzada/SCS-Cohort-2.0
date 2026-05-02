/*
Camel Case
You are given a string consisting of different words separated by underscores _. You have to convert the string to camel case. The first letter of the entire case should be lowercase.

eg: app_dsd_sdda to appDsdSdda

Note:

StringBuilder in Java represents a mutable sequence of characters.

Input Format
The first line contains the number of test cases.

For each test case: The first line contains the string S.

Output Format
For each test case print the final formed string in a new line.

Example 1
Input:

1
abb_b_cc_d
Output:

abbBCcD
Explanation:

We remove the underscores and convert the next character to uppercase.

Example 2
Input:

1
how_are_you
Output:

howAreYou

Explanation:

We remove the underscores and convert the next character to uppercase.

Constraints
1 <= T <= 10

1 <= |S| <= 100000

Topics
Strings

*/

/*
🧠 Correct Approach (Simple Thinking)
    - Split string by _
    - First word → lowercase
    - Remaining words → capitalize first letter
    - Join everything
*/

function camelCase(str) {

  let words = str.split('_');   // split words at underscores _

  let result = words[0].toLowerCase();

  for(let i = 1; i < words.length; i++) {
    let word = words[i];
    result += word[0].toUpperCase() + word.slice(1)
  }
  return result;

}
console.log(camelCase('abb_b_cc_d')) // abbBCcD


// Another solution 

// function camelCase(str) {
//   return str
//     .split('_')
//     .map((word, i) =>
//       i === 0
//         ? word.toLowerCase()
//         : word[0].toUpperCase() + word.slice(1)
//     )
//     .join('');
// }