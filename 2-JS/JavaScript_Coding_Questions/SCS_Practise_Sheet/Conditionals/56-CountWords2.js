//-> Count the total number of words in a sentence.
// Approach 2 

function countWords(sentence) {

    if (typeof sentence !== "string") {
        return 0;
    }

    sentence = sentence.trim();

    if (sentence === "") {
        return 0;
    }

    return sentence.split(/\s+/).length;
}

console.log(countWords("I   love    JavaScript")); // 3

/*

🧠 What does /\s+/ mean?

This regular expression means:

\s → any whitespace (space, tab, newline)
+ → one or more

So it treats:

"I love"
"I    love"
"I\tlove"
"I
love"

*/