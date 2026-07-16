//-> 56. Count the total number of words in a sentence.

/*
Example 1
    Input: "I love JavaScript"
    Output: 3

Example 2
    Input: "My name is Sameer"
    Output: 4

-> Basic Logic

1. Split the sentence using spaces.
2. Count the number of elements.
3. Return the count.

Handle below case 
I    love    JavaScript
["I", "", "", "love", "", "", "", "JavaScript"]

- length becomes 8 ❌
- but actual is 3

*/

function countWords(sentence) {

    if (typeof sentence !== "string") {
        return 0;
    }

    return sentence.split(" ").length;
}

console.log(countWords("I love JavaScript")); // 3
