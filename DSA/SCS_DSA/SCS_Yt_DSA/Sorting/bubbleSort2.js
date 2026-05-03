// Enhanced bubble sort 

/*
📌 Definition (Crisp)
    Bubble Sort is a comparison-based sorting algorithm where adjacent elements are repeatedly compared and 
    swapped if they are in the wrong order. After each pass, the largest unsorted element is placed at its 
    correct position at the end.

🧠 Intuition (Strong Version)
    In every pass, we scan the array and push the maximum element of the unsorted part to the end — 
    just like a bubble rising to the surface.

🔁 Approach (Correct + Clean)
We perform n - 1 passes

In each pass:
    Compare adjacent elements
    Swap if left element is greater than right

After each pass:
    The last element becomes sorted
    Reduce comparison range in every iteration

🎯 Loop Understanding (Important for Interview)
Outer loop (i) → controls passes
    Runs n - 1 times
Inner loop (j) → controls comparisons
    Runs n - 1 - i times

👉 because last i elements are already sorted


*/
let array = [10,5,12,1,3];

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // optimization

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // if no swaps → already sorted
        if (!swapped) break;
    }

    return arr;
}

console.log(bubbleSort(array))