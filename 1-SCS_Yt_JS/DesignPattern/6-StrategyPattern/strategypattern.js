/*
1-Why Strategy Pattern is needed
2-Real-world bank problem
3-What Strategy Pattern actually is
4-Core roles in Strategy Pattern
5-Naive (bad) approach
6-Correct Strategy Pattern (Bank example)
7-Line-by-line explanation
8-Enhanced / realistic version
9-Comparison with previous patterns
10-When to use and when NOT to use Strategy

1. Why Do We Need the Strategy Pattern?
Consider interest calculation in a bank.

Different accounts calculate interest differently:
- Savings account → fixed interest
- Fixed deposit → higher interest
- Senior citizen → bonus interest
- Corporate account → custom rules

Question:
Should the Bank class contain all interest calculation logic?
❌ NO

That leads to:
- Huge if / else blocks
- Difficult maintenance
- High risk of breaking existing logic

2. Real-World Bank Problem
Imagine this code:

function calculateInterest(accountType, balance) {
    if (accountType === "savings") {
        return balance * 0.04;
    }
    if (accountType === "fixed") {
        return balance * 0.07;
    }
    if (accountType === "senior") {
        return balance * 0.08;
    }
}

Problems:

- Every new account type modifies this function
- Violates Open/Closed Principle
- Logic tightly coupled to conditions
This is exactly what Strategy Pattern fixes.


3. What Is Strategy Pattern? (Simple Definition)

Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them 
interchangeable at runtime.

In simple words:
- Same task
- Multiple ways to do it
- Decide the way dynamically


4. Core Roles in Strategy Pattern
Role	                            Bank Example
Context	                            Bank Account
Strategy	                        Interest Calculation Logic
Concrete Strategy	                Savings, Fixed, Senior
Client	                            Chooses strategy


5. Naive (Wrong) Approach – For Learning
function BankAccount(type, balance) {
    return {
        calculateInterest() {
            if (type === "savings") return balance * 0.04;
            if (type === "fixed") return balance * 0.07;
            if (type === "senior") return balance * 0.08;
        }
    };
}

Why this is bad:
- Logic grows endlessly
- Difficult to test
- Changing one rule risks all accounts


*/

//-> 6. Correct Strategy Pattern (Bank Example)
// -> Step 1: Define Strategies (Interest Algorithms)

const SavingsInterest = {

    // Strategy Interface (Implicit)
    /*
        JavaScript does not enforce interfaces, but:
        Every strategy must implement calculate
        This is contract-based design.
    */
    calculate(balance) {
    return balance * 0.04;
  },
};

const FixedDepositInterest = {
  calculate(balance) {
    return balance * 0.07;
  },
};

const SeniorCitizenInterest = {
  calculate(balance) {
    return balance * 0.08;
  },
};

/*

Each strategy:
    Has the same interface: calculate(balance)
    Implements its own logic

*/

// -> Step 2: Context (Bank Account)
function BankAccount(balance, interestStrategy) {
  let currentBalance = balance;
  let strategy = interestStrategy; /* context holds strategy - Context does not know how interest is calculated,
                                        It only calls strategy.calculate()
                                        This is decoupling */

  function setStrategy(newStrategy) {
    strategy = newStrategy;
  }

  function calculateInterest() {
    return strategy.calculate(currentBalance);
  }

  return {
    calculateInterest,
    setStrategy,
  };
}

//-> Step 3: Usage

const account = BankAccount(100000, SavingsInterest);

console.log(account.calculateInterest()); // 4000

account.setStrategy(FixedDepositInterest); // Behavior changes without modifying context code.
console.log(account.calculateInterest()); // 7000

account.setStrategy(SeniorCitizenInterest);
console.log(account.calculateInterest()); // 8000

/*
Same account.
Different interest logic.
No if / else.
*/

//-> Next part - strategypattern2.js