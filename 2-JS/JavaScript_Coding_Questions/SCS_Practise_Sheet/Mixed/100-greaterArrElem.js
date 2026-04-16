//-> Check if all elements in an array are greater than a given value.

/*

Example
Input:
arr = [10, 20, 30]
value = 5

Output: true

Input:
arr = [10, 2, 30]
value = 5

Output: false

What is .every()?
.every() → returns true if ALL elements satisfy condition

*/

function areAllGreater(arr, value) {

    if (!Array.isArray(arr)) return false;

    return arr.every(num => num > value);
}

console.log(areAllGreater([10, 20, 30], 5)); // true
console.log(areAllGreater([10, 2, 30], 5));  // false

/*
Dry Run
arr = [10, 2, 30]
value = 5

10 > 5 → true
2 > 5 → false ❌

→ .every() stops here → returns false

Important Behavior (Interview Trick ⚠️)
[].every(...) → true

Edge Case Handling
function areAllGreater(arr, value) {

    if (!Array.isArray(arr) || arr.length === 0) {
        return false;
    }

    return arr.every(num => num > value);
}

Alternative (Using Loop)
function areAllGreater(arr, value) {

    if (!Array.isArray(arr)) return false;

    for (let num of arr) {
        if (num <= value) {
            return false;
        }
    }

    return true;
}

Time & Space Complexity
Time → O(n)
Space → O(1)

.every() → all must pass
Stops early on failure
Empty array → true (important)


*/