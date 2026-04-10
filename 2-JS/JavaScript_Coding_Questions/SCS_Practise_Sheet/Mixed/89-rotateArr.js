//->  89. Rotate an Array Right by One Position

/*
1️⃣ Problem Understanding

Move the last element of the array to the front

Example
Input:  [1, 2, 3, 4, 5]
Output: [5, 1, 2, 3, 4]


Logic 
1. Store last element
2. Shift all elements to right
3. Put last element at index 0

*/

function rotateRightByOne(arr) {

    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }

    let last = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = last;

    return arr;
}

console.log(rotateRightByOne([1, 2, 3, 4, 5]));