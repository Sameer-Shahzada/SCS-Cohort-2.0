/*
    74. Split a string into an array of words.
    
*/

function splitString(str) {

    // validation to handle null, undefined and ''
    if(typeof str !== 'string') {
        return 0;
    }

    let arr = str.split(' ');
    return arr;
}
console.log(splitString('I am a dev guy')) 