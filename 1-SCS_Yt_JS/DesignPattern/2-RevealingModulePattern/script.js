// Revealing Module Pattern | IIFE
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
    check: checkBalance,
    save: deposit,
    draw: withdraw,
  };
})();

console.log(Bank.check()); // 12000
console.log(Bank.save(3000)); // 15000
console.log(Bank.draw(5000)); // 10000
