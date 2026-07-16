//-> 57. Return the longest word from a sentence.

/*

Example 1
    Input: "I love JavaScript"
    Output: "JavaScript"

Example 2
    Input: "Frontend development is amazing"
    Output: "development"


Because:
    Frontend    → 8 letters
    development → 11 letters ✅
    is          → 2 letters
    amazing     → 7 letters


2️⃣ Logic
1. Split the sentence into words.
2. Assume the first word is the longest.
3. Traverse all words.
4. Compare lengths.
5. If current word is longer, update longest.
6. Return longest.

*/

function longestWord(sentence) {
  // validation
  if (typeof sentence !== "string") {
    return "";
  }

  // remove extra spaces
  sentence = sentence.trim();

  if (sentence === "") {
    return "";
  }
  // split the sentence into words
  const words = sentence.split(/\s+/);

  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord("I love JavaScript"));
