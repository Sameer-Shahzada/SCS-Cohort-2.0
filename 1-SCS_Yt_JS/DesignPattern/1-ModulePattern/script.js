/**
    1. Why Do We Need Design Patterns at All?
        Before touching the code, understand the problem design patterns solve.

    Common Problems in JavaScript (especially for beginners)
        1-Global variable pollution
            let bankbalance = 12000;
            function withdraw() {}
    Anyone can change bankbalance from anywhere.

        2. No control over data
            Any function can directly modify critical data.
            Bugs become hard to trace.

        3. Poor structure
            Logic is scattered.
            Code becomes difficult to maintain as projects grow.

- Design Patterns
Design patterns are proven solutions to recurring problems in software design. They are not frameworks, 
not libraries, and not magic code.

They answer:
“How should I structure my code so it is safe, scalable, and maintainable?”

2. What Is the Module Pattern?
Definition (Simple)
    Module Pattern is used to
    encapsulate data and expose only what is necessary.

Core Concepts Used
- The Module Pattern relies on:
- IIFE (Immediately Invoked Function Expression)
- Closures
- Private vs Public members

*/

// Module Pattern | IIFE
const Bank = (function () {
    let balance = 12000; // private variable

    // private function
    function checkBalance() {
        return balance;
    }

    function deposit(amount) {
        if (amount <= 0) {
            return "Invalid deposit amount";
        }
        balance += amount;
        return balance;
    }

    function withdraw(amount) {
        if (amount <= 0) {
            return "Invalid withdrawal amount";
        }
        if (amount > balance) {
            return "Insufficient balance";
        }
        balance -= amount;
        return balance;
    }

    // public API
    return {
        checkBalance,
        deposit,
        withdraw
    };
})();

console.log(Bank.checkBalance());   // 12000
console.log(Bank.deposit(3000));   // 15000
console.log(Bank.withdraw(5000));  // 10000