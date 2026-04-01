/* 
    73. Convert a string to lowercase.
*/

function strConversion (str) {
    // validation to handle null, undefined and ''
    if(typeof str !== 'string') {
        return 0;
    }

    let conversion = str.toLowerCase();
    return conversion;
}
console.log(strConversion('SAMEER')) 