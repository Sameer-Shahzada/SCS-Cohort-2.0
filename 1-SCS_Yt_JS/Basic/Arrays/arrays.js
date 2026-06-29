// 1- create an array with 3 fruits and print the second fruit 
const fruits = ['apple', 'mango','banana'];
console.log(fruits[1]);

// add guava at the end and kiwi at the begining
fruits.push('guava');   // add at the end of the array
fruits.unshift('kiwi')  // add at the begining of the array
console.log(fruits)

// replace guava with pomengranate in the above array 

// 1st way 
// fruits.pop('guava');
// fruits.push('pomengranate');
// console.log(fruits);

// 2nd way  

let index = fruits.indexOf('guava');
if(index !== -1) {
    // fruits[index] = 'pomengranate'
    fruits.splice(index, 1, 'pomengranate')
}
console.log(fruits);

// ----------------------------------------------- //

// 2- Remove the last element of the array
const arr = [1,2,3,4];
arr.pop();
console.log(arr);

// 3- Insert Red and Blue at index 1 at the array 
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");
console.log(colors);

// 4- Extract only the middle 3 elements from this array 
const items = [1,2,3,4,5,6];
const newArr = items.slice(2,5)
console.log(newArr);

// 5- Sort and Reverse an array 
const family = ["Sameer", "Huma", "Hasan"];
console.log(family.sort());
console.log(family.reverse());

// 6- Use .map method to square each number
const num = [1,2,3,4];
num.map((value, index) => {
    let sqr = value * value;
    return console.log(sqr)
});

// 7- Use .filter method to keep number which is greater than 10
const marks = [3,5,14,7,34,15,8]
const newMarks = marks.filter((value, index) => {
    return value > 10
})
console.log(newMarks);

// 8- use reduce method to sum of an array elements
const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value;
},0);
console.log(sum);

// 9- use find method to get the first number which is less then 10
const nums = [1,4,1,6,23,56,57];
const find_result = nums.find((value) => {
    return value < 10;
});
console.log("result - ", find_result) // find always return first value

// 10- use .some method to check if any student has scored below 35
const score = [23,56,89,21,69];
const score_result = score.some((value, index) => {
    return value < 35
});
console.log("score: ", score_result); // It always return boolean value if anyone (worked on single value) scored below 35.

// 11- use .every method to check all given number are even or not.
const nmr = [2,4,6,8,10];
const nmr_result = nmr.every((value) => {
    return value % 2 == 0;
})
console.log("even or not - ",nmr_result) // .every method just opposite to .some method it works on all value if condition pass for all elements then it returns true otherwise false.

// 12- destructure this array to get firstName and lastName
const fullName = ["Sameer", "Shahzada"];
[fistName, lastName] = fullName;

// 13- Merge two array using spread operator
const ar1 = [1,2,3,4];
const ar2 = [5,6,7,8];
const ar3 = [...ar1, ...ar2];
console.log('Merged array by using spread operator - ', ar3);

// 14- Add India at the begining to this array by using spread operator
let countries = ['USA','UAE'];
countries = ['India', ...countries]
console.log('countries - ', countries);

// 15- clone this array properly (not by reference)
const arrr = [1,2,3];
const arrr2 = [...arrr];
arrr2.pop();
console.log(arrr)
console.log(arrr2)

