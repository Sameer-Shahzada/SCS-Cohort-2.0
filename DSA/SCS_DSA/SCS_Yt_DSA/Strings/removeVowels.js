// Write a program to remove vowels from a given string by using two-pointer technique.


let string = 'Sameer'
function remvVowels(str) {

    // validation
    if(typeof str !== 'string') return '';

    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    // convert given string into array 
    let arr = str.split('');

    let left = 0;
    let right = 0;

    while(right < arr.length) {
        if(!vowels.has(arr[right])) {
            arr[left] = arr[right];
            left++;
        }
        right++;
    }
    return arr.slice(0,left).join('');
}
console.log(remvVowels())