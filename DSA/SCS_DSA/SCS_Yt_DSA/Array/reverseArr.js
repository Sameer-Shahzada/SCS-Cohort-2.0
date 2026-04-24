// Write a program to reverse an array 

/*
    Approach 1
    - use js built in .reverse() method 
    
    Approach 2 
    iterate the loop over given array in reverse mode
    
    
*/

let array  = [1,2,3,4,5,6];

function reverseArr(arr) {
    // return arr.reverse()
    
      // validation 
    if(!Array.isArray(arr) || arr.length === 0) {
        return 'Invalid Input';
    }
    
    let reversed = [];
    
    for(let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed;
}

console.log(reverseArr(array))

/**
 * There are two way to solve reverse an array 
 * Reverse array with space 
 * Reverse array without Space
 * both examples in scs cohort dsa
 * 
 */