//-> 82. Write a program to count the occurrences of a value in an array 

/**
  Input 
  arr = [1, 2, 3, 2, 4, 2]
  value = 2

  Output:
  3

Basic Logic
1. Initialize count = 0
2. Traverse the array
3. If element === value → increment count
4. Return count
  
 */

const array = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 7];

function countOccuranceValue(arr, value) {
    // validation 
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === value) {
            count++
        }
    }
    return count;

}
console.log(countOccuranceValue(array, 4))