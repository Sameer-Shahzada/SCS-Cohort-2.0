//-> 85. Write a program to return a new array with squared values.


const array = [2,3,4,5,6];

function squareArrayValues(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }

    return result;
}

console.log(squareArrayValues(array));
