import promptSync from "prompt-sync";
const prompt = promptSync();

// Input from user
const units = Number(prompt("Enter units consumed: "));

function calculateElectricityBill(unit) {

    if (Number.isNaN(unit) || unit < 0) {
        return null;
    }

    let amount = 0;

    if (unit > 400) {
        amount += (unit - 400) * 13;
        unit = 400;
    }

    if (unit > 200) {
        amount += (unit - 200) * 8;
        unit = 200;
    }

    if (unit > 100) {
        amount += (unit - 100) * 6;
        unit = 100;
    }

    amount += unit * 4.2;

    return amount.toFixed(2);
}

const bill = calculateElectricityBill(units);

if (bill === null) {
    console.log("Invalid unit input");
} else {
    console.log(`Total electricity bill: ₹${bill}`);
}
