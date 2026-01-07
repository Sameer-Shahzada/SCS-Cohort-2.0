//-> Write a program to Move All Zeros to the Left and All Ones to the Right

/*
🔍 Problem Understanding

You are given an array that contains only 0s and 1s. Your task is to rearrange the array such that:

    - All 0s appear on the left
    - All 1s appear on the right

Order among 0s or 1s does not matter.


✅ Approach 1: Two-Pointer Technique (Best DSA Approach)

🔑 Idea
    - Use two pointers
        - left → starts from beginning
        - right → starts from end
    - Swap when needed
    
⏱️ Complexity
    Time: O(n)
    Space: O(1) (in-place)

Input:
[1, 0, 1, 0, 1, 0]

Steps:
swap(1,0) → [0,0,1,0,1,1]
swap(1,0) → [0,0,0,1,1,1]

Output:
[0, 0, 0, 1, 1, 1]

*/

function moveZerosAndOnes(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Input";
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === 0) {
      left++;
    } else if (arr[right] === 1) {
      right--;
    } else {
      // arr[left] = 1 and arr[right] = 0 → swap
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
}
console.log(moveZerosAndOnes([0,0,1,0,1,1]))