//-> 53. Return the average of numbers in an array.

/*
    To find out the average of array elements 
    - sum of all array elements 
    - divide by the length of array 
*/

function averageOfArrayElements(arr) {

    // zero edge case handled to prevent NaN
    if (arr.length === 0) {
        return 0;
    }

    // variable to store sum of array elements
    let sum = 0;

    // calculate sum of elements
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        average = sum / arr.length;
    }

    // calculate average after summing
    let average = sum / arr.length;
    return average;
}
console.log(averageOfArrayElements([40, 30, 50, 68, 38]))

/*
Edge Case (Important in Interviews)

What if the array is empty?
[]
Then:

sum / arr.length
= 0 / 0
= NaN

Better to handle this.
*/

/*
Time and Space Complexity

Interviewers often ask this.

Time Complexity
O(n)

Because we traverse the array once.

Space Complexity
O(1)

Only one variable (sum) is used.
*/