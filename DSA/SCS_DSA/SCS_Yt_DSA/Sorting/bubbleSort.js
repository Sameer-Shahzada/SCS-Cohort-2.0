/*
    Bubble Sort 
    
📌 What is Bubble Sort?
Bubble Sort is a simple comparison-based sorting algorithm where adjacent elements are compared and swapped 
if they are in the wrong order. With each pass, the largest element "bubbles up" to its correct position at 
the end.

🔁 Core Idea (Intuition)

Think of it like this:
    After every iteration, the largest unsorted element moves to the end.

For interviewer 
    "Bubble Sort repeatedly compares adjacent elements and swaps them if needed. After each iteration, 
    the largest element gets placed at the end. We optimize by reducing the comparison range and stopping 
    early if no swaps occur."
    
Approach 
    - let consider first element as bubble element 
    - if right element is greater then bubble element then swap the elements 
    - if right element is not greater then bubble element then pass the bubble 
    
    --- Loop Understanding ---
    outer loop controls -> phases 
    inner loop controls -> swap , pass operations
    
    phases operation n - 1
    inner loop operations n - 1 - i 
    logic swap 
    
*/

let array = [10, 5, 1, 12, 3];

function bubbleSort(arr) {
    let n = arr.length;
    // outer loop -> control phases 
    for (let i = 0; i < n - 1; i++) {
        // inner loop -> control operations
        for (let j = 0; j < n - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                // swapping 
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr)
}
bubbleSort(array)