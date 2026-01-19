/*
1-Why Factory Pattern is needed
2-What problem it solves
3-Core idea of Factory Pattern
4-Your first simple Factory (Bank example)
5-Line-by-line explanation
6-Why this is a real design pattern (not just functions)
7-Improved / enhanced version
8-Comparison with Module Pattern
9-When to use Factory Pattern in real projects


1. Why Do We Need the Factory Pattern?

Imagine this situation without Factory Pattern:

let savingsAccount = {
  type: "savings",
  balance: 10000
};

let currentAccount = {
  type: "current",
  balance: 20000
};

Problems:
- Object creation logic is repeated
- No standard structure
- Hard to manage when object types increase
- Any developer can create invalid objects
This becomes dangerous in large applications.

2. What Problem Does Factory Pattern Solve?
    Factory Pattern centralizes object creation logic
Instead of:
- Creating objects everywhere
- Create objects from one place
This ensures:
- Consistency
- Validation
- Easy scalability

3. What Is Factory Pattern? (Simple Definition)
- Factory Pattern is a design pattern used to create objects without exposing the creation logic to the client.

Client says:
    “I want this type of object”
Factory decides:
    “How that object is created”

*/

// 4- Factory Pattern (Bank Example)

// Core factory function which create and return objects and it decides which object to create
function BankAccountFactory(type, initialBalance) {
    // Decision Logic - Client does not know how savings account is created. Client only requests "savings" that is decoupling
  if (type === "savings") {
    return createSavingsAccount(initialBalance);
  }

  if (type === "current") {
    return createCurrentAccount(initialBalance);
  }

  return null;
}

// Object creation is hidden
/* 
- Fixed structure
- No invalid savings account can be created
- Business rules stay inside factory
*/
function createSavingsAccount(balance) {
  return {
    type: "savings",
    balance,
    interestRate: 4,
    deposit(amount) {
      this.balance += amount;
    },
  };
}

function createCurrentAccount(balance) {
  return {
    type: "current",
    balance,
    overdraftLimit: 5000,
    withdraw(amount) {
      if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
      }
    },
  };
}

const acc1 = BankAccountFactory("savings", 10000);
const acc2 = BankAccountFactory("current", 20000);

console.log(acc1)
console.log(acc2)
/*
6. Why This Is a Design Pattern (Important)

This is a design pattern because:

Aspect	                                    Explanation
Centralization	                            Object creation in one place
Abstraction	                                Client doesn’t know implementation
Scalability	                                Add new account types easily
Safety	                                    Prevents malformed objects

This is NOT just a helper function.

Note -> Next part in factorypattern2.js
*/
