/*
8. Enhanced / Production-Ready Version

Let’s improve:
- Validation
- Error handling
- Clear API

*/

const Bank = (function () {
    let instance;

    function createBank() {
        let balance = 12000;

        function validateAmount(amount) {
            if (amount <= 0) {
                throw new Error("Invalid amount");
            }
        }

        return {
            getBalance() {
                return balance;
            },
            deposit(amount) {
                validateAmount(amount);
                balance += amount;
            },
            withdraw(amount) {
                validateAmount(amount);
                if (amount > balance) {
                    throw new Error("Insufficient balance");
                }
                balance -= amount;
            }
        };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createBank();
            }
            return instance;
        }
    };
})();

/*
This version:
    Protects state
    Enforces business rules
    Still guarantees one instance.


9. Singleton vs Module vs Factory (Very Important)
Pattern	                            Purpose	                            Instances
Module Pattern	                    Encapsulation	                     One
Factory Pattern	                    Object creation	                     Many
Singleton Pattern	                Single shared instance	             Exactly one
Mental Model

Module → One toolbox
Factory → Many products
Singleton → One central authority

11. Key Takeaway (Very Important)
    Singleton Pattern is about controlling existence, not just access.

You are now understanding:
- State control
- Lifecycle management
- Architectural decision-making

This is real software design, not just JavaScript syntax.
*/