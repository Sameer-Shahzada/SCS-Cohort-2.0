//-> Section 1: Objects and OOPs Thinking (Foundation)

// Create a user object that stores name and email and has a login method which prints 'User logged in'.

const User = {
    name: 'Jhon Doe',
    email: 'jhon@gmail.com',
    login: function () {
        console.log('User 1 logged in...')
    }
}

console.log(User?.login())

const User2 = {
    name: 'Jhon Doe',
    email: 'jhon@gmail.com',
    login: function () {
        console.log('User 2 logged in...')
    }
}

console.log(User2?.login())

/* Imagine you now have 5 users.
- First, think how you would manage them without using a class.
- Then convert the same logic using a class and observe how the code becomes cleaner. 
- Write code for both approaches.
*/

class Users {
    constructor(name, email) {
       this.name = name;
       this.email = email
    }
    loggedIn() {
        console.log('logged in...');
    }
   
}

const user1 = new Users('Jhon', 'jhon@gmail.com')
const user2 = new Users('Shan', 'shan@gmail.com')
const user3 = new Users('Dani', 'dani@gmail.com')
const user4 = new Users('Saim', 'saim@gmail.com')

console.table([user1, user2, user3, user4])

// Create a product object that stores name and price and has a method which returns the final price after discount.
const product = {
    name:'shoe',
    price:3300,
    discountPrice: function () {
        return this.price - 200;
    }
}

console.log(product.discountPrice())

// The goal of this section is to understand why keeping data 
// behaviour together makes code easier to manage.

// Section 2: Classes and Objects

/* Create a Car class with the following
- brand and speed
- drive method that prints the car brand and speed
*/

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    
    drive() {
        return `This car has ${this.brand} brand and ${this.speed} speed`
    }
}

// Create two different car objects from the same class and verify their data is different.
let c1 = new Car('Volvo', 120);
let c2 = new Car('BMW', 220);

console.table([c1,c2])

// Answer this in your own words
// - if classes did not exist, how would you write this logic and problems might occur when the project becomes large?

// Section 3: Constructor and this keyword

// Create a student class whose constructor accepts name and roll number
// Add a method introduce that prints both values.

class Student {
    constructor(name, rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
    intro() {
        return `This is ${this.name} and my roll number is ${this.rollNumber}`
    }
}
let s1 = new Student('Alice', 23)
let s2 = new Student('Priyank', 25)

console.table([s1,s2])


// Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

// Create an object with two methods:
// - One method using a normal function
// - One method using an arrow function

// 1- object with normal function 
const Dog = {
    name:'Henry',
    color:'Black',
    bark:function() {
        console.log('The dog barks', this)
    }
}

console.log(Dog.bark())

const Cat = {
    name:'Monto',
    color:'Orange',
    meow: (() => {
        console.log('Cat meow!', this)
    })
}

console.log(Cat.meow())

// Inside both, print this and observe the difference.

const obj = {
    sayName: function () {
        console.log(this)
    },
    sayArrowName: () => {
        console.log(this)
    }
}
obj.sayName();
obj.sayArrowName();
// The goal is to clearly understand how this works and when it 

// Section 4: Constructor Functions and prototypes
// Create a Person constructor function (do not use class syntax)
// - Add a login method in two ways:
// - First, Inside the constructor
// - Then, move to the method to the prototype


// The purpose here is to understand how prototypes help share behaviour efficiently. 

// Without constructor 
function Person(name) {
    this.name = name;
}

Person.prototype.loggedIn = function () {
    console.log('logged in...');
}

let p1 = new Person("Manoj");
let p2 = new Person("Aman");

console.table([p1,p2])


// Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

console.log(p1.loggedIn === p2.loggedIn); // true because of prototype share the same function if we omit the function from prototype then it will false
// Section 5: call, apply, bind 

function abcd () {
    console.log(this.name)
}
let obj1 = {
    name: "James"
}
console.log(abcd.call(obj1))

// Create a function that prints this.name 





