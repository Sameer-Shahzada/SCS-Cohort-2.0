// -> 43. Write a function that returns the sum of an array.

function SumOfArrElements(arr) {
    // validation 
    if(!Array.isArray(arr)) {
        return 'Invalid, Input should be an array'
    } 

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(SumOfArrElements([2,5,8,9,10]));