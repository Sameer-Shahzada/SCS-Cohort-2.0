// Write a program to toggle each character

function toggleStringChar(str) {
    let toggle = '';

    for (let i = 0; i < str.length; i++) {
        let ch = str.charCodeAt(i);

        if (ch >= 65 && ch <= 90) {
            toggle += String.fromCharCode(ch + 32);
        } else if (ch >= 97 && ch <= 122) {
            toggle += String.fromCharCode(ch - 32);
        } else {
            toggle += str[i]; // handle non-alphabet
        }
    }
    return toggle;
}

console.log(toggleStringChar('SaMeEr'));

/*
5️⃣ Dry Run (Correct Code)

Input:

SaMeEr
i	char	ASCII	Action	        Result
0	S	    83	    +32 → s	          s
1	a	    97	    -32 → A	          sA
2	M	    77	    +32 → m	          sAm
3	e	    101 	-32 → E	          sAmE
4	E	    69	    +32 → e	          sAmEe
5	r	    114 	-32 → R	          sAmEeR

6️⃣ Final Output
sAmEeR


7️⃣ Interview Insight (Important)
Your approach is:
ASCII manipulation

✔ Good for fundamentals
✔ Shows understanding of character encoding

8️⃣ Even Better (Interview Preferred in JS)

Use built-in methods:

function toggleStringChar(str) {
    let result = '';

    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}
9️⃣ Best One-Liner (Advanced)
const toggle = str =>
    str.split('').map(c =>
        c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
    ).join('');
🔟 Complexity
Time Complexity
O(n)
Space Complexity
O(n)
1️⃣1️⃣ Key Concept to Remember
🔥 ASCII Trick
A → Z : 65–90
a → z : 97–122

Upper → Lower = +32
Lower → Upper = -32
1️⃣2️⃣ Common Interview Follow-ups

Be ready for:

Toggle only alphabets (ignore digits/symbols)
Count uppercase & lowercase
Convert entire string to uppercase/lowercase without built-ins
Check if string is valid alphabet-only
1️⃣3️⃣ Final Verdict
Criteria	Status
Logic	✅
Bug	❌ (loop condition)
Optimization	✅
Interview readiness	✅ (after fix)
🚀 Next Challenge (Important Upgrade)

Write:

function compressString(str)

Input:

aaabbc

Output:

a3b2c1

👉 This is a very common interview problem (string + loops).

Post your solution — I’ll review deeply (edge cases + optimal approach).
*/