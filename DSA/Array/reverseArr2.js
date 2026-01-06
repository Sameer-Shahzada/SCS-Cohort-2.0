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
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

console.log(reverseArr([45, 78, 33, 90, 43]));
