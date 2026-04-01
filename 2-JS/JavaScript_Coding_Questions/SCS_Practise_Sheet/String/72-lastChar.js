/*
    72. Print last 4 characters using slice().
*/

function printLastChar(str) {
    // validation to handle null undefined & ''
    if(typeof str !== 'string') {
        return 0;
    }

    let result = str.slice(-4);
    return result;
}
console.log(printLastChar('Sameer')) 