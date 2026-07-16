// find the longest word from sentence

function longestWord(sentence) {

    if (typeof sentence !== "string") return "";

    return sentence
        .trim()
        .split(/\s+/)
        .reduce((longest, current) =>
            current.length > longest.length ? current : longest
        );
}