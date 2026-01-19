/*
8. Enhanced / Realistic Version

Let’s improve:
Validation
More flexible design


*/

function BankAccount(balance, strategy) {
    let currentBalance = balance;

    function calculateInterest() {
        if (!strategy || typeof strategy.calculate !== "function") {
            throw new Error("Invalid interest strategy");
        }
        return strategy.calculate(currentBalance);
    }

    function changeStrategy(newStrategy) {
        strategy = newStrategy;
    }

    return {
        calculateInterest,
        changeStrategy
    };
}

/*
This makes it: Safer and More production-ready

9. Strategy vs Other Patterns (Big Picture)
Pattern	                    Focus
Module	                    Encapsulation
Factory	                    Object creation
Singleton	                Single instance
Observer	                Event reaction
Strategy	                Algorithm selection

Mental Model
    Factory → What to create
    Strategy → How to behave


10. When Should You Use Strategy Pattern?

Use Strategy When:
    - Multiple ways to perform same operation
    - Rules change frequently
    - Avoid large condition blocks
    - Behavior must change at runtime

Avoid Strategy When:
    - Only one algorithm exists
    - Logic is extremely simple
    - Over-engineering is unnecessary


11. Key Takeaway (Very Important)
    Strategy Pattern separates “WHAT is done” from “HOW it is done”.

Your Bank Account:
    Needs interest calculation ✔
    Does NOT need to know calculation rules ✔
That is clean architecture.


*/