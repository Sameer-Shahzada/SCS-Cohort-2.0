/*
61. Create a person object and print it.
*/

const person = {
    firstName: 'Jhon',
    lastName: 'Doe',

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


// 61- print the object 
console.log(person.getFullName())

// 62- add a new property to above object 
// can add new property by using 
//- dot notation
//- bracket notation
person.age = 32;
console.log(person)

// 63- Access object property using bracket notation
console.log(person['lastName']);

// 64- delete a property from an object
// delete any property by using delete keyword
delete person.lastName
console.log(person.lastName)

// 65- print all object keys using Object.keys()
const keys = Object.keys(person);
console.log(keys);


