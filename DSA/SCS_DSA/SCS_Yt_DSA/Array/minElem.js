// Write a program to find out min elem in array 

/*
    Approach 
    - declare min variable to store min elem 
    - let consider first elem as min elem 
    - Traverse all array elements 
    - And compare each element with the first elem 
    - Finally store the min element into min variable 
*/

const array = [0,30,5,39,1];

function minElemOfArr (arr) {
    // validation
    if(!Array.isArray(arr)) {
        return 'Invalid Input';
    }

    // declare min elem and initialize it with zero
    let min = 0;
    // let consider first elem as min element
    min = arr[0];

    // Traverse and comparison 
    for(let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minElemOfArr(array))