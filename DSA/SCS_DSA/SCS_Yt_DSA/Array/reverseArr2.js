// Write a program to reverse the array without extra space 

let array = [10,20,30,40,50];

function reverseArr(arr) {
    // validation 
    if(!Array.isArray(arr) || arr.length === 0) {
        return `Invalid Input`;
    } 

    let i = 0; let j = arr.length - 1;

    while(i!=j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
        j--;
    }
}
console.log(reverseArr(array));