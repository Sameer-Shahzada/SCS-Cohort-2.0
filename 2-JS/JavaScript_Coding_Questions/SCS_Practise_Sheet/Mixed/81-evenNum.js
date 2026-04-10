// Write a program to return only even numbers from an array.

const array = [1,2,4,5,3,7,8,12,36,13,11];

function evenNumber(arr) {
    // validation 
    if(!Array.isArray(arr)) {
        return `Invalid input`;
    }

    let evenNum = []
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenNum.push(arr[i]);
        }
    }
    return evenNum;
}
console.log(evenNumber(array))