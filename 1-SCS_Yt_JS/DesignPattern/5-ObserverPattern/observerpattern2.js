/*
7. Enhanced / More Realistic Version

Let’s improve:
- Unsubscribe support
- Validation
- Clear structure


*/

function Bank() {
    let balance = 10000;
    let observers = [];

    function subscribe(observer) {
        observers.push(observer);
    }

    function unsubscribe(observer) {
        observers = observers.filter(obs => obs !== observer);
    }

    function notify(event) {
        observers.forEach(observer => observer.update(event));
    }

    function deposit(amount) {
        if (amount <= 0) return;
        balance += amount;
        notify({ event: "DEPOSIT", amount, balance });
    }

    function withdraw(amount) {
        if (amount > balance) return;
        balance -= amount;
        notify({ event: "WITHDRAW", amount, balance });
    }

    return {
        subscribe,
        unsubscribe,
        deposit,
        withdraw
    };
}


// Observers 

const SMSAlert = {
    update({ event, amount }) {
        console.log(`SMS Alert → ${event}: ₹${amount}`);
    }
};

const AuditLog = {
    update(data) {
        console.log("Audit log updated:", data);
    }
};

/*
8. Why This Is a Real Design Pattern

Observer Pattern enforces:

Principle	                                    Benefit
Loose coupling	                                Subject & observers independent
Open/Closed	                                    Add alerts without changing Bank
Single Responsibility	                        Bank handles money, not alerts
Scalability	                                    Add/remove observers dynamically

This is true system design, not just JS functions.

Mental Model
Module → Hide data
Factory → Create objects
Singleton → One authority
Observer → React to changes

10. When Should You Use Observer Pattern?
Use When:
    - Events trigger multiple reactions
    - You don’t know who needs updates
    - UI updates
    - Notifications
    - Logging
    - Real-time systems

Avoid When:
    - Only one dependent action
    - Simple synchronous flow
    - Performance-critical loops (too many observers)

11. Key Takeaway (Very Important)

Observer Pattern decouples “what happened” from “what to do next”.

Your Bank:
- Does transactions
- Announces changes
- Does NOT care who listens
That is clean architecture.

12. What You Are Learning (Big Picture)

You are now thinking like:
A system designer
Not just a JavaScript coder
You have covered:
    1-Module Pattern
    2-Factory Pattern
    3-Singleton Pattern
    4-Observer Pattern


*/