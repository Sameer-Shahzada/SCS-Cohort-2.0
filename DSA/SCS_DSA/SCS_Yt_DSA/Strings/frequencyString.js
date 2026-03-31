// Write a program to frequency of each character

// 3️⃣ Improved Version (Interview-Ready)
function getCharFrequency(str) {
    // ASCII size (can be adjusted)
    const freq = new Array(128).fill(0);

    // Count frequency
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        freq[charCode]++;
    }

    // Print result
    for (let i = 0; i < freq.length; i++) {
        if (freq[i] > 0) {
            console.log(`${String.fromCharCode(i)} appears ${freq[i]} times`);
        }
    }
}

// Example
// getCharFrequency("anbcsa");
// 4️⃣ Naming Improvements (Important)
// Old	New
// s	str
// arr	freq
// indx	charCode

// 👉 Always use meaningful variable names

// 5️⃣ Dry Run (Quick)

// Input:

// "anbcsa"

// Step 1: Counting

// a → 2
// n → 1
// b → 1
// c → 1
// s → 1

// Step 2: Printing

// a appears 2 times
// b appears 1 times
// c appears 1 times
// n appears 1 times
// s appears 1 times

// 6️⃣ Best Interview Approach (IMPORTANT)

// Instead of array → use HashMap (Object / Map)

// 👉 More flexible, handles all characters

// ✅ Preferred Solution (Most Interviewers Like This)
function getCharFrequency(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char in freq) {
        console.log(`${char} appears ${freq[char]} times`);
    }
}

getCharFrequency("anbcsa");

// 7️⃣ Why This is Better
// Approach	Pros	Cons
// Array (ASCII)	Fast	Limited
// Object/Map	Flexible	Slight overhead

// 👉 Interviewers prefer Map/Object unless constraints say ASCII only.

// 8️⃣ Even Better (Using Map)

function getCharFrequency(str) {
    const freq = new Map();

    for (let char of str) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (let [char, count] of freq) {
        console.log(`${char} appears ${count} times`);
    }
}

// 9️⃣ Complexity
// Time Complexity
// O(n)
// Space Complexity
// O(k)   (k = unique characters)
// 🔟 Concept You Must Remember
// 🔥 This is HASHING
// value → frequency mapping

// Used in:

// Anagram problems
// Duplicate detection
// Character counting
// Frequency sorting
// 1️⃣1️⃣ Interview Follow-ups (Very Important)

// They may ask:

// Find most frequent character
// Check if two strings are anagrams
// First non-repeating character
// Count only alphabets (ignore symbols)
// 1️⃣2️⃣ Final Verdict
// Criteria	Status
// Logic	✅
// Approach	✅
// Naming	❌ improve
// Interview readiness	⚠️ (needs function + map)
// 🚀 Next Challenge (Very Important)

// Solve:

// function firstNonRepeatingChar(str)

// Input:

// aabcbcde

// Output:

// d

// 👉 This is very commonly asked.
