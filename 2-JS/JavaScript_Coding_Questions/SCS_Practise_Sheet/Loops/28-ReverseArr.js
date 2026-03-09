//-> 28. Reverse an array manually using a loop.

/*
-> Best Interview Version (Two-Pointer Method)
    This avoids extra variables and is the most preferred approach.
*/

function reverseArr(arr) {
    if (!Array.isArray(arr)) {
        return 'Invalid Input';
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // swap elements
        [arr[left], arr[right]] = [arr[right], arr[left]];
        
        left++;
        right--;
    }

    return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5]));

/*
    How It works
    [1, 2, 3, 4, 5]
     L           R

    Swap: 
    [1, 2, 3, 4, 5]
        L     R
    
    Swap again: 
    [5, 4, 3, 2, 1]
            L R

    Loop stops when left >= right.

⏱ Complexity
Metric	Value
Time	O(n)
Space	O(1)


*/

/*
⭐ Interview Tip

When asked “reverse an array”, always say:
    “I'll use the two-pointer approach and swap elements from both ends moving toward the center.”
That shows algorithmic understanding.
*/