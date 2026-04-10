// -> 90. Check Whether an Array is Empty

/*
Problem Understanding
    Return true if array has no elements

Example
Input: []
Output: true

Input: [1,2]
Output: false


*/

function isArrayEmpty(arr) {

    if (!Array.isArray(arr)) {
        return false;
    }

    return arr.length === 0;
}

console.log(isArrayEmpty([]));      // true
console.log(isArrayEmpty([1, 2]));  // false

// 4️⃣ Edge Cases (Important)
isArrayEmpty(null)        // false
isArrayEmpty(undefined)   // false
isArrayEmpty("string")    // false