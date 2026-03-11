// -> Create a function that checks whether a string begins with a specific character.

/*
So the function will receive:
- a string
- a character
Then it should return true or false.

Example 
Input:
string = "Hello"
character = "H"

Output:
true

Example 
Input:
string = "JavaScript"
character = "a"

Output:
false

*/

function checkStrWithChar(str, char) {
    if(str[0] === char) {
        return true;
    } else {
        return false
    }
}
console.log(checkStrWithChar('Sameer','a')); 