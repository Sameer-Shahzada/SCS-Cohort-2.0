//-> Write a program to Move All Zeros to the Left and All Ones to the Right

/*
🔍 Problem Understanding

You are given an array that contains only 0s and 1s. Your task is to rearrange the array such that:

    - All 0s appear on the left
    - All 1s appear on the right

Order among 0s or 1s does not matter.


✅ Approach 2: Counting Method (Simple & Clean)

🔑 Idea
    - Count number of 0s
    - Fill array accordingly
    
⏱️ Complexity
    Time: O(n)
    Space: O(1) (if modifying same array)

Input:
[1, 0, 1, 0, 1, 0]

Steps:
swap(1,0) → [0,0,1,0,1,1]
swap(1,0) → [0,0,0,1,1,1]

Output:
[0, 0, 0, 1, 1, 1]

*/

function moveZerosAndOnes(arr) {

    let zeroCount = 0;

    for (let num of arr) {
        if (num === 0) zeroCount++;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = i < zeroCount ? 0 : 1;
    }

    return arr;
}
console.log(moveZerosAndOnes([0,0,1,0,1,1]))