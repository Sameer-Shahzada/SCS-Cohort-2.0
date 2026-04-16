//-> Given two sorted arrays, merge them into one sorted array

/*
Example
Input:
arr1 = [1, 3, 5]
arr2 = [2, 4, 6]

Output:
[1, 2, 3, 4, 5, 6]

Optimal Approach (Two Pointers ✅)
1. Use two pointers (i, j)
2. Compare elements from both arrays
3. Push smaller element into result
4. Move pointer
5. Add remaining elements



*/

function mergeSortedArrays(arr1, arr2) {

    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // add remaining elements
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(mergeSortedArrays([1,3,5], [2,4,6]));

/*
Dry Run
arr1 = [1,3,5]
arr2 = [2,4,6]

Compare:
1 < 2 → push 1
3 > 2 → push 2
3 < 4 → push 3
5 > 4 → push 4
5 < 6 → push 5

Remaining → 6

Final → [1,2,3,4,5,6]

Time & Space Complexity

Time → O(n + m)
Space → O(n + m)

--------------------------------------------

Simple (But Less Preferred) Solution
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

⚠️ Not preferred because:
   Time → O((n+m) log(n+m)) ❌

Interview Follow-ups (Very Important)

After this, interviewer may ask:

1️⃣ Merge in-place (no extra array)
2️⃣ Merge k sorted arrays
3️⃣ Merge arrays with duplicates
4️⃣ Merge descending arrays
🔥 Key Takeaways
Use two pointers
Compare and push smaller
Handle remaining elements
🚀 Why This Problem Matters

This is the foundation for:

Merge Sort
Two pointer problems
Interval merging
Sliding window

*/