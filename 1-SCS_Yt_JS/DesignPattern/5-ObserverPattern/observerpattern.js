/*
1-Why Observer Pattern is needed
2-Real-world bank analogy
3-What Observer Pattern actually is
4-Core roles in Observer Pattern
5-Basic Bank Observer example
6-Line-by-line explanation
7-Enhanced / realistic version
8-Why this is a real design pattern
9-Comparison with previous patterns
10-When to use and when to avoid Observer


1. Why Do We Need the Observer Pattern?
Think about bank transactions.

When a transaction happens:
- SMS alert is sent
- Email notification is sent
- App notification updates
- Transaction history updates

Question:
Should the Bank system know how to send SMS, Email, App notifications?
❌ NO
That would:
- Tighten coupling
- Make code rigid
- Break scalability

2. Real-World Bank Analogy
Situation:
    “Whenever a transaction occurs, notify all interested parties.”
Interested parties:
- SMS Service
- Email Service
- Mobile App
- Audit System
These services observe the bank.

The bank:
- Does not care who listens
- Just announces something happened
This is exactly where Observer Pattern fits.

3. What Is Observer Pattern? (Simple Definition)

Observer Pattern defines a one-to-many dependency where multiple observers are notified 
automatically when the subject’s state changes.

In simple words:
- One Subject (Bank)
- Many Observers (Alert systems)
- Automatic updates

4. Core Roles in Observer Pattern
Role	                        Bank Example
Subject	                        Bank system
Observers	                    SMS, Email, App
Subscribe	                    Register for alerts
Notify	                        Send updates
Unsubscribe	                    Stop alerts


*/

// -> 5. Basic Observer Pattern (Bank Example)
// Bank (Subject)
function Bank() {
  let balance = 10000;
  let observers = [];  // Observer storage - Stores all subscriber and Bank does not know what they do

  function subscribe(observer) {    // subscribing observer | Any object with update() can subscribe, Loose coupling
    observers.push(observer);
  }

  // notify observers - bank send data and observer decide how to react
  function notify(transaction) {
    observers.forEach((observer) => observer.update(transaction));
  }

  function deposit(amount) {
    balance += amount;
    notify({ type: "deposit", amount, balance });
  }

  function withdraw(amount) {
    if (amount <= balance) {
      balance -= amount;
      notify({ type: "withdraw", amount, balance });
    }
  }

  return {
    subscribe,
    deposit,
    withdraw,
  };
}


//->  Observers (Alert Systems)

function SMSAlert() {
    return {
        update(transaction) {
            console.log(`SMS: ${transaction.type} of ₹${transaction.amount}`);
        }
    };
}

function EmailAlert() {
    return {
        update(transaction) {
            console.log(`Email: Your balance is ₹${transaction.balance}`);
        }
    };
}

// Usage

const bank = Bank();

const sms = SMSAlert();
const email = EmailAlert();

bank.subscribe(sms);
bank.subscribe(email);

bank.deposit(5000);
bank.withdraw(2000);


// -> Next part in observerpattern2.js
