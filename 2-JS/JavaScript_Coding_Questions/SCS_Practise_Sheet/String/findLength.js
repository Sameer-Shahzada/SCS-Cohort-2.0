/*
    71. Print the length of a string.
*/

function findStringLength(str) {
    // validation for null, undefined and ''
    if (typeof str !== 'string') return 0;

    return str.length;
}
console.log(findStringLength('Sameer5'))

