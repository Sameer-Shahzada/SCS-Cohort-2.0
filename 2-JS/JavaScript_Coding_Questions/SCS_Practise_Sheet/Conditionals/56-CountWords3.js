//-> Count the total number of words in a sentence.

/*
    Without Using split() (Interview Twist)

Some interviewers ask:

"Don't use split()."

Then you can count transitions from whitespace to a word.

*/

function countWords(sentence) {

    if (typeof sentence !== "string") return 0;

    let count = 0;
    let inWord = false;

    for (let char of sentence) {

        if (char !== " " && !inWord) {
            count++;
            inWord = true;
        }

        if (char === " ") {
            inWord = false;
        }
    }

    return count;
}

console.log(countWords('I love JavaScript'));

