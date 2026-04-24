// Write a program to find out max element in array.

/* 
    Approach 
    - declare max element to store maximum element
    - Let consider the first element as max element of array 
    - Traverse all array element 
    - Compare it with each element one by one
    - Finally store the max elem into max variable.
*/

const array = [90,34,220,62,80];

function maxElemOfArr (arr) {
    // validation 
    if(!Array.isArray(arr)) {
        return 'Invalid Input';
    }

    // to store the max elem
    let max = 0; 
    // consider first element as max elem
    max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxElemOfArr(array))