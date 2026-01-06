/**
 * Returns the array and the sum using reduce
 *
 * @param {number[]} arr
 * @returns {{ arr: number[], sum: number }}
 */
function sumOfArrayElements(arr) {
    if (!Array.isArray(arr)) {
        return 'Invalid Input';
    }

    const sum = arr.reduce((acc, currValue) => {
        if (typeof currValue !== 'number') {
            throw new Error('Invalid Input');
        }
        return acc + currValue;
    }, 0);

    return { arr, sum };
}

// Example usage
const numbers = [10, 20, 30, 40];
console.log(sumOfArrayElements(numbers));
