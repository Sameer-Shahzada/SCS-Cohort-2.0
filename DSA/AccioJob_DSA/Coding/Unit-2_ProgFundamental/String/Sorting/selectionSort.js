/* 

//-> Selection Sort 

1-find the minimum element
2-place it at correct position

🧠 Core Idea
Select minimum element
→ swap with current index

That’s why it is called:- Selection Sort

🔍 Dry Run

Input: 10 2 0 15 1 12 3

Pass 1
Minimum: 0
Swap with: 10

Array: 0 2 10 15 1 12 3

Pass 2
Minimum: 1
Swap with: 2

Array: 0 1 10 15 2 12 3
Eventually: 0 1 2 3 10 12 15

✅ Output
Pass 1: [0, 2, 10, 15, 1, 12, 3]
Pass 2: [0, 1, 10, 15, 2, 12, 3]
Pass 3: [0, 1, 2, 15, 10, 12, 3]

❌ Why Selection Sort is NOT Stable
Because distant swaps can change relative order.

🧠 Selection Sort vs Bubble Sort
Bubble Sort	                        Selection Sort
adjacent swaps	                    one swap/pass
many swaps	                         fewer swaps
stable	                               unstable

*/


function selectionSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        // assume current index has minimum element
        let minIndex = i;

        // find actual minimum element
        for (let j = i + 1; j < n; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // swap only if needed
        if (minIndex !== i) {   // Avoid Unnecessary Swaps

            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        console.log(`Pass ${i + 1}:`, [...arr]);
    }

    return arr;
}

let arr = [10, 2, 0, 15, 1, 12, 3];

console.log("Sorted Array:", selectionSort(arr));