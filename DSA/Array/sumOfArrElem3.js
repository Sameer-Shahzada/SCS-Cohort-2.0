/**
 * Returns the array and the sum of its elements
 *
 * @param {number[]} arr - input array of numbers
 * @returns {{ arr: number[], sum: number }}
 */
function sumOfArrayElements(arr) {
    if (!Array.isArray(arr)) {
        return 'Invalid Input';
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'Invalid Input';
        }
        sum += arr[i];
    }

    return { arr, sum };
}

// Example usage
const numbers = [10, 20, 30, 40];
console.log(sumOfArrayElements(numbers));
