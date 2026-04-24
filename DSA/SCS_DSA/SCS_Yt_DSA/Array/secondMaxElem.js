// Write a program to find the second max element from array

/*
    Approach 


*/

// const array = [10,30,56,61,70,43,29]; 
// corner case if array like this
const array = [10,30,40,40,40,40];

function secondMaxElem (arr) {
    // validation 
    if(!Array.isArray(arr)) {
        return 'Invalid Input';
    }

    let max = Math.max(arr[0], arr[1]);
    let smax = Math.min(arr[0], arr[1]);
    

    for(let i = 2; i < arr.length; i++) {
        if(arr[i] > max) {
            smax = max;
            max = arr[i];
        } else if(arr[i] > smax && max != arr[i]) {
            smax = arr[i]
        }
    }
    return smax;

}
console.log(secondMaxElem(array))


