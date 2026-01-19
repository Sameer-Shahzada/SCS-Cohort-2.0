/*
1-Why Singleton Pattern is needed
2-What problem it solves
3-What Singleton Pattern actually is
4-First naive (wrong) approach
5-Correct Singleton implementation (Bank example)
6-Line-by-line explanation
7-Why this is a real design pattern
8-Enhanced / production-ready version
9-Comparison with Module & Factory
10-When to use and when NOT to use Singleton

1. Why Do We Need the Singleton Pattern?

Consider a real bank system.
Should there be:
- Multiple bank systems running independently? ❌
- Or exactly one central bank system? ✅

Problem without Singleton
    const bank1 = createBank();
    const bank2 = createBank();

Now you have:
- Two balances
- Two transaction systems
- Inconsistent data
This is dangerous in real applications.

2. What Problem Does Singleton Solve?
    Singleton Pattern ensures that a class or module has only ONE instance and provides a global 
    access point to it.

It solves:
- Duplicate instances
- Data inconsistency
- Resource wastage
- Uncontrolled initialization

3. What Is Singleton Pattern? (Simple Definition)
    Singleton Pattern restricts object creation so that only one instance exists throughout the 
    application lifecycle.

Key rules:
1- Only one instance
2- Same instance returned every time
3- Controlled creation

4. Wrong / Naive Approach (Very Important to See)
function Bank() {
    return {
        balance: 10000
    };
}

const bank1 = Bank();
const bank2 = Bank();

console.log(bank1 === bank2); // false ❌

Why this is wrong?
- Every call creates a new object
- No restriction
- No control
This is NOT Singleton.
*/

// -> 5. Correct Singleton Pattern (Bank Example)
//Basic Singleton Implementation

// IIFE Creates Private Scope -> Prevents direct access to instance and Ensures encapsulation
const Bank = (function () {
  let instance; // private variable (stores single instance)

  function createBank() {
    let balance = 12000;

    return {
      getBalance() {
        return balance;
      },
      deposit(amount) {
        balance += amount;
      },
      withdraw(amount) {
        if (amount <= balance) {
          balance -= amount;
        }
      },
    };
  }

  return {
    // Lazy initialization
    /* 
- Instance created only when needed
- Improves performance
- Avoids unnecessary setup
*/
    getInstance() {
      if (!instance) {
        instance = createBank();
      }
      return instance;  // always return then same object (same memory reference, same state & same data)
    },
  };
})();
const bank1 = Bank.getInstance();
const bank2 = Bank.getInstance();

bank1.deposit(3000);

console.log(bank2.getBalance()); // 15000
console.log(bank1 === bank2); // true ✅

/*
7. Why This Is a Design Pattern (Not Just Code)

Singleton is a design pattern because it enforces:

Principle	                        Explanation
Controlled creation	                Object creation is restricted
Global consistency	                Single source of truth
Encapsulation	                    Instance hidden
Lifecycle management	            Lazy initialization

This is intentional architecture, not accidental coding.

Note -> Production ready version in next part - singletonpattern2.js
*/
