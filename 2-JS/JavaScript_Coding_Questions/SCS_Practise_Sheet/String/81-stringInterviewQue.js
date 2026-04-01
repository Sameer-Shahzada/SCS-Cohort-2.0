// Good — this is exactly how interviewers extend a simple question into deeper evaluation.
// Below are 5 important variations of the vowel problem that are commonly asked as follow-ups.

// 🔥 1️⃣ Count Both Vowels and Consonants
// Problem

// Return count of vowels and consonants separately

// Example
// Input: "Sameer"
// Output: vowels = 4, consonants = 2
// Solution

function countVowelsAndConsonants(str) {

    if (typeof str !== 'string') return { vowels: 0, consonants: 0 };

    let vowels = 0;
    let consonants = 0;

    const vowelSet = 'aeiou';

    for (let char of str.toLowerCase()) {

        if (char >= 'a' && char <= 'z') {
            if (vowelSet.includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}

console.log(countVowelsAndConsonants("Sameer"));

// 🔥 2️⃣ Count Each Vowel Frequency
// Problem

// Count frequency of each vowel separately

// Example
// Input: "programming"
// Output: { a:1, e:0, i:1, o:1, u:0 }

// Solution
function countEachVowel(str) {

    if (typeof str !== 'string') return {};

    const result = { a:0, e:0, i:0, o:0, u:0 };

    for (let char of str.toLowerCase()) {
        if (result.hasOwnProperty(char)) {
            result[char]++;
        }
    }

    return result;
}

console.log(countEachVowel("programming"));


// 🔥 3️⃣ Remove All Vowels from String
// Problem
// Input: "Sameer"
// Output: "Smr"
// Solution
function removeVowels(str) {

    if (typeof str !== 'string') return "";

    return str
        .split('')
        .filter(char => !"aeiouAEIOU".includes(char))
        .join('');
}

console.log(removeVowels("Sameer"));

// 🔥 4️⃣ Check if String Contains Any Vowel
// Problem
// Input: "sky"
// Output: false
// Solution
function hasVowel(str) {

    if (typeof str !== 'string') return false;

    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            return true;
        }
    }

    return false;
}

console.log(hasVowel("sky"));


// 🔥 5️⃣ Replace Vowels with '*'
// Problem
// Input: "Sameer"
// Output: "S*m**r"
// Solution

function replaceVowels(str) {

    if (typeof str !== 'string') return "";

    return str
        .split('')
        .map(char => "aeiouAEIOU".includes(char) ? '*' : char)
        .join('');
}

console.log(replaceVowels("Sameer"));

// 🧠 Why These Matter (Interview Insight)

// These variations test:

// String traversal
// Condition logic
// Edge case handling
// Use of JS methods (filter, map, includes)
// 🚀 Pro-Level Tip

// If interviewer starts with:

// "Count vowels"

// Be ready for follow-ups:

// → Ignore case?
// → Ignore spaces?
// → Return frequency?
// → Optimize?
// → Without built-in methods?
// 📌 What You Should Do Next

// Practice in this order:

// 1 Count vowels
// 2 Count vowels + consonants
// 3 Remove vowels
// 4 Replace vowels
// 5 Frequency map

// If you want, I can now give you real interview-level string questions (Amazon/Flipkart/Accio style) — slightly harder than these.

// Note -> Must practise these interview questions