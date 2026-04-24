// Write a program to sum of the array elements 

function sumOfArrElem (arr) {
    // validation 
    if(!Array.isArray(arr)) {
        return 'Invalid Input';
    }

    // create a variable to store the sum of all array elements
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumOfArrElem([30,50,28,9,22]))  // 139