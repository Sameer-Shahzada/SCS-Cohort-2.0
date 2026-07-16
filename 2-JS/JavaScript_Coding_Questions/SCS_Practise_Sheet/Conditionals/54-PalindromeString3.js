//-> Write a program to check given string is palindrome or not.

//-> Modern Javascript solution 
function isPalindrom (str) {
    // validation
    if(typeof str !== 'string') {
        return false;
    }

    return str === str.split('').reverse().join('');
}
console.log(isPalindrom('madam'))