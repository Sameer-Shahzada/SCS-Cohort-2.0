function countVowels(str) {

    if (typeof str !== 'string') return 0;

    let count = 0;
    const vowels = 'aeiou';

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Sameer'));

/*
💡 Best Approach (Most Clean)
function countVowels(str) {
    if (typeof str !== 'string') return 0;

    return [...str.toLowerCase()].filter(char => 'aeiou'.includes(char)).length;
}
*/