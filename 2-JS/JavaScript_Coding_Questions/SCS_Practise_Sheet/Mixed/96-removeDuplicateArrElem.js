// -> Given an array, return a new array with duplicate values removed.

/*
Example
Input:  [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]


*/

//-> Approach 1 (Best – Using Set ✅)
// 👉 This is the most preferred solution in JavaScript interviews

function removeDuplicates(arr) {

    if (!Array.isArray(arr)) return [];

    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

/*
🧠 How it works
new Set([1,2,2,3]) → {1,2,3}
Set automatically removes duplicates.



3️⃣ Approach 2 (Using Loop – Interview Classic)
function removeDuplicates(arr) {

    if (!Array.isArray(arr)) return [];

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

Approach 3 (Using Object / Hash Map)
function removeDuplicates(arr) {

    let map = {};
    let result = [];

    for (let num of arr) {
        if (!map[num]) {
            map[num] = true;
            result.push(num);
        }
    }

    return result;
}
5️⃣ Time & Space Complexity
Approach	Time	Space
Set	O(n)	O(n)
Loop + includes	O(n²) ❌	O(n)
Map/Object	O(n)	O(n)


6️⃣ Interview Follow-ups (Very Important)

After this, interviewer may ask:

1️⃣ Remove duplicates without using Set
2️⃣ Keep only duplicates
Input: [1,2,2,3,3]
Output: [2,3]
3️⃣ Remove duplicates from sorted array (in-place)
4️⃣ Handle objects in array
[{id:1}, {id:1}]
🔥 Key Takeaways
Set → easiest & fastest
includes → simple but slow
Map → scalable approach
🎯 Interview Tip

If interviewer doesn’t restrict:

👉 Use:

[...new Set(arr)]

If they say:

👉 “Don’t use built-in methods”

→ Use loop + condition

*/