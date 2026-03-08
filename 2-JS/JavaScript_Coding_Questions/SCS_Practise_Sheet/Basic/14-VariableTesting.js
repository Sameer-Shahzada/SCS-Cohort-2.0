/* 
    14. Print the result of typeof null.
    15. Store a number as a string and print its type.
    16. Create a boolean variable and print its type.
    17. Create a string, number, and boolean and print them together.
    18. Declare a variable without assigning a value and print its type.
    19. Assign undefined to a variable and print its type.
*/

const value = null;
const name = "Durefisha";
const flag = false;
let num;
let test = undefined;

console.log('Type of null is - ', typeof value);
console.log('Type of name value is - ', typeof name);
console.log('Type of boolean value is - ', typeof flag);

console.table([name, value, flag]);

console.log(`Variable without assigning any value is - ${num} and its type is - ${typeof num}`)

console.log(typeof test); // undefined

