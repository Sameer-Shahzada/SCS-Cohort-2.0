//-> Return the index of the first character that repeats in a string.

/*

Example 1
Input: "abca"
Output: 3

Explanation:
    'a' appears again at index 3

Example 2
Input: "abcdef"
Output: -1

👉 No repeating character

Important Clarification (Interview Trick ⚠️)

There are 2 interpretations:
✔️ Type 1 (Most common)
    - First character whose second occurrence appears first

We will solve this.

Approach (Using Hash Set)
1. Traverse string
2. Store characters in a set
3. If character already exists → return index

*/

function firstRepeatingIndex(str) {

    if (typeof str !== "string") return -1;

    let seen = new Set();

    for (let i = 0; i < str.length; i++) {

        if (seen.has(str[i])) {
            return i;
        }

        seen.add(str[i]);
    }

    return -1;
}

console.log(firstRepeatingIndex("abca"));   // 3
console.log(firstRepeatingIndex("abcdef")); // -1

/*
Dry Run
str = "abca"

i=0 → a → add
i=1 → b → add
i=2 → c → add
i=3 → a → already exists → return 3

Time & Space Complexity
Time → O(n)
Space → O(n)

--------------------------------------------

Alternative (Using Object / Map)
function firstRepeatingIndex(str) {

    let map = {};

    for (let i = 0; i < str.length; i++) {

        if (map[str[i]]) {
            return i;
        }

        map[str[i]] = true;
    }

    return -1;
}

*/