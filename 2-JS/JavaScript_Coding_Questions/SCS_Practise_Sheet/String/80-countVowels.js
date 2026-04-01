/*
    80. Count the number of vowels in a string.
*/

function countVowels(str) {
    // validation to handle null, undefined and ''
    if (typeof str !== 'string') {
        return 0;
    }

    // vowels counter 
    let count = 0;

    // convert string into array first 
    const arr = str.toLowerCase().split('');

    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i] === 'a' ||
            arr[i] === 'e' ||
            arr[i] === 'i' ||
            arr[i] === 'o' ||
            arr[i] === 'u'
        ) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('Sameer'))