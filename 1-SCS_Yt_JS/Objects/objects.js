// 1- for in loop to iterate over object properties
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
for (const key in person) { 
    console.log(key + ": " + person[key]);
}

// 2- for of loop to iterate over array elements
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// 3- Object.keys() to get an array of object keys
const car = {
    make: "Toyota", 
    model: "Camry",
    year: 2020
};
const keys = Object.keys(car);
console.log(keys);

// 4- Object.values() to get an array of object values
const values = Object.values(car);
console.log(values);

// 5- Object.entries() to get an array of key-value pairs
const entries = Object.entries(car);
console.log(entries);

// 6- Using hasOwnProperty() to check if an object has a specific property
if (car.hasOwnProperty('model')) {
    console.log("The car object has the property 'model'.");
} else {
    console.log("The car object does not have the property 'model'.");
}

// 7- Merging two objects using Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

// 8- Merging two objects using spread operator
const mergedObjSpread = { ...obj1, ...obj2 };
console.log(mergedObjSpread); // { a: 1, b: 3, c: 4 }

// 9- Destructuring an object to extract properties
const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

// 10- Using JSON.stringify() to convert an object to a JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);

// 11- Using JSON.parse() to convert a JSON string back to an object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

// 12- Freezing an object to prevent modifications
const frozenPerson = Object.freeze(person);
frozenPerson.age = 35;
console.log(frozenPerson.age); // 30, modification won't take effect

// 13- deep cloning an object using stringify and parse
const deepClonedPerson = JSON.parse(JSON.stringify(person));
deepClonedPerson.city = "Los Angeles";
console.log(deepClonedPerson.city); // Los Angeles
console.log(person.city); // New York 

//14 - computed property names in object literals
const propName = "country";
const user = {
    name: "John",
    [propName]: "USA"
};
console.log(user.country); // USA

// Note : Create another file with name objects2.js and watch object part only for object problems.