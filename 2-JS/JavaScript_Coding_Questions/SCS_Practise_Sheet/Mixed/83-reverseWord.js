//-> 83. Write a program to reverse each word in a sentence.

/*

Example 
Input:  "I love my India"
Output: "I evol ym aidnI"

Approach (Step-by-Step)
1. Split sentence into words
2. Reverse each word
3. Join words back into sentence
*/
const string = 'I love my India';

function reverseEachWord(str) {

    // validation
    if (typeof str !== 'string') return "";

    let words = str.split(" ");
    let result = [];

    // using for loop instead of for...of
    for (let i = 0; i < words.length; i++) {

        let word = words[i];
        let reversed = "";

        // reverse each word
        for (let j = word.length - 1; j >= 0; j--) {
            reversed += word[j];
        }

        result.push(reversed);
    }

    return result.join(" ");
}

console.log(reverseEachWord(string));
// Output: I evol ym aidnI

