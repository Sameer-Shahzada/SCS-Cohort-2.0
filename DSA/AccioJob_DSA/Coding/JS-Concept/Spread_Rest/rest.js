// Example of rest operator 
// 
const arr = [1,2,3,4,5,6,7,8];

// const [a,b,c] = arr; // It holds value for a, b and c only and leave all remaining elements 
// const [a,b,c, ...rest] = arr;   // It will hold remaining element also in rest operator with a, b, c
const [a, , ,,b, ...rest] = arr; // It is the selective destructuring
console.log(a,b, rest); // a = 1, b = 2, c = 3
// Note ...rest operator always should be placed in last 
// if you do const [a, , ,,b, ...rest, c] = arr;  then it will throw syntax error that is Rest element must be last element


//-----------------------------------------------------------//

// destructuring in objects
const person = {name:"ajay",age:26,profession:"SDE",
    places: {
        north:"Delhi",
        south:"Delhi",
        mountains:"Uttarakhand"
    }
}

const {name, places:{north, mountains}} = person

console.log(name, north, mountains)

