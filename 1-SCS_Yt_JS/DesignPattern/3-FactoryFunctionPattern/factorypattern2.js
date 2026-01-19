/*
7. Enhanced Factory Pattern (More Realistic)

Let’s improve it with:
- Validation
- Encapsulation
- Better structure
*/

function BankAccountFactory({ type, balance = 0 }) {
  if (balance < 0) {
    throw new Error("Initial balance cannot be negative");
  }

  switch (type) {
    case "savings":
      return savingsAccount(balance);
    case "current":
      return currentAccount(balance);
    default:
      throw new Error("Invalid account type");
  }
}

function savingsAccount(balance) {
  return {
    type: "savings",
    getBalance() {
      return balance;
    },
    deposit(amount) {
      if (amount <= 0) return;
      balance += amount;
    },
  };
}

function currentAccount(balance) {
  const overdraft = 5000;

  return {
    type: "current",
    withdraw(amount) {
      if (amount <= balance + overdraft) {
        balance -= amount;
      }
    },
    getBalance() {
      return balance;
    },
  };
}


const acc = BankAccountFactory({ type: "savings", balance: 10000 });
acc.deposit(2000);
console.log(acc.getBalance());

// -> Now this even uses closure, like Module Pattern.

/*
8. Factory Pattern vs Module Pattern (Very Important)
Feature	                Module Pattern	                Factory Pattern
Purpose	                Encapsulation	                Object creation
Output	                Single module	                Multiple objects
State	                Shared/private	                Per instance
Example	                One Bank	                    Many bank accounts


Think Like This:
Module Pattern → One bank system
Factory Pattern → Many bank accounts

9. When Should You Use Factory Pattern?
Use Factory Pattern when:
- You need multiple similar objects
- Object creation is complex
- Object type is decided at runtime
- You want to follow Open/Closed Principle

Avoid it when:
- You only need one object
- Object creation is trivial


10. Mental Model (Very Beginner Friendly)

Think of a real factory:
You say:
    “Give me a savings account”
Factory decides:
- What fields it has
- What methods it has
- What rules it follows

You don’t:
- Assemble it
- Configure it
- Validate it

11. Key Takeaway

Factory Pattern separates “WHAT to create” from “HOW it is created”.

You are now moving from:
Writing scripts ❌
To:
Designing systems ✅
*/