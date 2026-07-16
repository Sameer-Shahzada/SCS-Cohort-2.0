//-> 54. Check if a string is a palindrome.

/* 
- Reverse the string
- Compare original and reversed 
- If equal -> true 
- Otherwise -> false
*/

function isPalindrome (str) {
    // validation 
    if(typeof str !== 'string') {
        return `Invalid input of string`;
    }

    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed === str;
}

// console.log(isPalindrome('sameer')); // true
console.log(isPalindrome('madam')); // false
