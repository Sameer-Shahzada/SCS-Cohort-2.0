//-> Return the total number of characters in a string.

/*
Input: "Sameer"
Output: 6

Input: "Hello World"
Output: 11   (space is also counted)

Basic Approach
👉 A string already has a property:
    - str.length


*/

function countCharacters(str) {

    if (typeof str !== "string") return 0;

    return str.length;
}

console.log(countCharacters("Sameer")); // 6

/*
Dry Run
str = "Hello"

H e l l o
1 2 3 4 5

length = 5
---------------------------------------------

Interview Twist (Important ⚠️)
Sometimes interviewer changes requirement:

🔹 Case 1: Ignore spaces
function countCharacters(str) {

    if (typeof str !== "string") return 0;
    return str.replace(/\s/g, "").length;
}

🔹 Case 2: Count only alphabets
function countCharacters(str) {

    if (typeof str !== "string") return 0;

    let count = 0;

    for (let char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            count++;
        }
    }

    return count;
}

🔹 Case 3: Without using .length (Important for interviews)
function countCharacters(str) {

    if (typeof str !== "string") return 0;

    let count = 0;

    for (let char of str) {
        count++;
    }

    return count;
}

6️⃣ Complexity
Time → O(n)
Space → O(1)

🔥 Key Takeaways
.length → easiest
loop → for interview twist
clarify → spaces included or not


🚀 Interview Tip

Always ask:
    "Should spaces and special characters be counted?"
    - This shows clear thinking.
*/