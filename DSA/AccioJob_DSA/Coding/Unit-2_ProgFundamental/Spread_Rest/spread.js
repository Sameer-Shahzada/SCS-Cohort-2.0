/* Spread Operator 
        - It is used to spread the values 
*/


// Basic example of spread operator 
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const result = [...arr1, ...arr2];
console.log(result);

// sum of array elements by using spread operator in function 

function sumOfArrElements(...numbers) {
    let result = 0; 
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }
    console.log(result);
}

sumOfArrElements(1,2,3)
sumOfArrElements(1,2,3,5,6,7)
sumOfArrElements(1,2,3,6,4,7,4)

// spread on objects

const obj = {a:1, b:2};

const newObj = {...obj, c:3, d:4}
console.log(newObj)

// create an object from an array 
const arr = [1,2,3,4,5];
const objFromArr = {...arr};
console.log(objFromArr);

//--------------------------//
const person = {name:"jhon", age:24, location:"delhi"}
console.log(person)
const newPerson = {...person, name: "Arun", age:37, } // always place spread obj at first not in last 
// const newPerson = { name: "Arun", age:37, ...person}  
console.log(newPerson)