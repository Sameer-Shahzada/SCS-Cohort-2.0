//-> 87. Print full name from an object.

const person = {
    firstName:'Jaun',
    lastName:'Aulia',
    fullName: () => {
        return person.firstName + " " + person.lastName;
    }
}
console.log(person.fullName())