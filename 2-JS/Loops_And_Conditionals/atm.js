// Write a program to represent ATM simulator - Allow with three withdrawals only
// Start with 1000 balance in account. Ask withdrawal amount three times.
// If enough balance deduct amount and show remaining balance else show "Insufficient balance"

import promptSync from "prompt-sync";
const prompt = promptSync();

let balance = 1000;
let attempts = 0;

while (balance > 0 && attempts < 3) {
  const withdraw = Number(prompt("Enter withdrawal amount: "));

  // Input validation
  if (isNaN(withdraw) || withdraw <= 0) {
    console.log("Invalid amount. Enter a positive number.");
    continue; // Does not count as an attempt
  }

  // Check if sufficient balance exists
  if (withdraw > balance) {
    console.log("Insufficient balance. Withdrawal failed.");
    attempts++; // This counts as an attempt
    continue;
  }

  // Successful withdrawal
  balance -= withdraw;
  console.log(`Withdrawal successful. Remaining balance: ${balance}`);

  attempts++; // Only successful / attempted withdrawal counts
}

if (balance === 0) {
  console.log("Account balance reached zero. No more withdrawals allowed.");
}

if (attempts >= 3) {
  console.log("Maximum attempts reached. Try again later.");
}

console.log(`Transaction ended. Final balance: ${balance}`);
