/*
Inverse Camel Case
One of the important aspect of object oriented programming is readability of the code. To enhance the readability of code, developers write function and variable names in Camel Case.

You are given a string S, written in Camel Case. Find All The Words Contained In It.

Note Complete the given function. The input would be handled by the driver code. You only have to print the answer.

Input Format
The only line contains the string S.

Output Format
Print each word in a new line

Example 1
Input

IAmAJavaProgrammer
Output

I
Am
A
Java
Programmer

Explanation
We separate each word and print them in a new line.

Example 2
Input

OnePiece
Output

One
Piece
Explanation

We separate each word and print them in a new line.

Constraints
1 <= |str| <= 10000

Topics
Strings
*/

/*
✅ Correct Approach (Core Idea)
- Traverse string character by character
- If uppercase letter appears:
- Print previous word
- Start new word
*/

function inverseCamelCase(str) {
    let word = str[0]; // start with first character

    for (let i = 1; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            console.log(word);
            word = str[i];
        } else {
            word += str[i];
        }
    }

    console.log(word); // print last word
}
inverseCamelCase('IAmAJavaProgrammer')