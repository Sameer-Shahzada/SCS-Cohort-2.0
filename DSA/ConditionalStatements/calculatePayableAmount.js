// Shop discount - description on graphic

import promptSync from "prompt-sync";
const prompt = promptSync();

// Input from user
const amount = Number(prompt("Enter your amount: "));

// Function to calculate payable amount after discount
function calculatePayableAmount(amount) {

    // Validation
    if (Number.isNaN(amount) || amount <= 0) {
        return "Invalid amount";
    }

    let discountRate = 0;

    if (amount <= 5000) {
        discountRate = 0;
    } else if (amount <= 7000) {
        discountRate = 5;
    } else if (amount <= 9000) {
        discountRate = 10;
    } else {
        discountRate = 20;
    }

    const discountAmount = (discountRate * amount) / 100;
    const payableAmount = amount - discountAmount;

    return payableAmount.toFixed(2);
}

const result = calculatePayableAmount(amount);

if (typeof result === "string") {
    console.log(result);
} else {
    console.log(`Payable amount: ${result}`);
}
