// Write a program to return the second Max element from given array

/*
Approach:

1. Validation:
   - Ensure input is a valid array.
   - Array must contain at least 2 elements to determine second maximum.

2. Initialization:
   - Initialize two variables:
        max  -> stores the largest element
        smax -> stores the second largest element
   - Compare first two elements:
        max  = greater of arr[0], arr[1]
        smax = smaller of arr[0], arr[1]

3. Iteration (Single Pass):
   - Traverse array starting from index 2.
   - For each element:
        a) If current element > max:
              - Update smax = max
              - Update max = current element
        b) Else if current element is between max and smax:
              - Update smax = current element

4. Edge Case Handling:
   - Works even if elements are unordered.
   - If duplicates exist, this logic returns the second distinct largest only if handled explicitly.
     (Current logic does NOT prevent duplicates like [5,5,5])

5. Time & Space Complexity:
   - Time: O(n) → Single traversal
   - Space: O(1) → No extra space used

*/

let array = [24, 56, 89, 34, 65, 32, 78];

function secondMaxElem(arr) {
    // validation 
    if (!Array.isArray(arr) || arr.length === 0) {
        return `Invalid Input`;
    }

    let max = Math.max(arr[0], arr[1]);
    let smax = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            smax = max
            max = arr[i]

        } else if (arr[i] > smax) {
            smax = arr[i]
        }
    }
    return smax;
}

console.log(secondMaxElem(array))