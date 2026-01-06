// Write a program to find the minimum element from given array 

function findMinElem(arr) {
    // validation
    if(!Array.isArray(arr) || arr.length === 0) {
        return 'Invalid Input';
    }

    let min = arr[0]; 
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMinElem([65,34,89,43,12]));
