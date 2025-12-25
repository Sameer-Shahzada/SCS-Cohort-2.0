// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const age = Number(prompt("Enter your age: "));

// function checkUsersAge(age) {
//     if(isNaN(age) || age < 0) {
//         console.log("Invalid age");
//         return; // Early return to stop further execution
//     }
//     if(age >= 18) {
//         console.log('You are eligible to vote');
//     } else {
//         console.log('You are not eligible to vote');
//     }
// }
// checkUsersAge(age)

//------------------------------------------------------------------------//

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(
//   prompt("Please enter the number up to which you want the loop execute. ")
// );

// let sum = 0;

// function sumOfAllNumbers(num) {
//   if (isNaN(num) || num < 1) {
//     console.log("Invalid input");
//     return; // Early return to stop further execution
//   }

//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       console.log("Odd number:", i);
//       sum += i;
//     }
//   }
//   console.log("total sum of all numbers - ", sum);
// }
// sumOfAllNumbers(num);

//------------------------------------------------------------------------//

// print numbers

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const start = Number(prompt("Enter start number - "));
// const end = Number(prompt("Enter end number - "));

// function printNumbers(startNum, endNum) {

//     // validate start number
//     if (isNaN(startNum) || startNum < 0) {
//         console.log("Start number is invalid");
//         return;
//     }

//     // validate end number
//     if (isNaN(endNum) || endNum < 0) {
//         console.log("End number is invalid");
//         return;
//     }

//     // validate range
//     if (startNum > endNum) {
//         console.log("Start number cannot be greater than end number");
//         return;
//     }

//     // printing numbers
//     for (let i = startNum; i <= endNum; i++) {
//         console.log(i);
//     }
// }

// printNumbers(start, end);
//------------------------------------------------------------------------//

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// let password = "Sameer123";

// const userPass = prompt("Enter your password: ");
// function checkPassword(userPassword) {
//   if (password === userPassword) {
//     console.log("matched");
//   } else {
//     console.log("not-matched");
//   }
// }
// checkPassword(userPass);

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// let attemps = 0;
// let unlocked = false;
// let pass = "sameer";
// let password = prompt("Enter your password: ");

// attemps++;

// while(password !== pass) {
//     if(attemps === 3) {
//         console.log("Account locked due to multiple failed attempts");
//         break;
//     }
//     password = prompt("Incorrect password. Try again: ");
//     if(password === pass) {
//         console.log("Password matched. Access granted.");
//         unlocked = true;
//         break;
//     }
//     attemps++;
// }

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// let attemp = 0;
// let systemPassword = "sameer";
// let userPassword = prompt("Enter your password: ");
// attemp++;

// while(userPassword !== systemPassword) {
//     if(attemp === 3) {
//         console.log("Account locked due to multiple failed attempts");
//         break;
//     }
//     (userPassword === systemPassword) ? console.log("Password matched. Access granted.") : console.log("Incorrect password. Access denied.");

//     userPassword = prompt("Enter your password: ");
//     attemp++;

// }

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// let balance = 1000;
// let attempts = 0;

// while (balance > 0 && attempts < 3) {
//   const withdraw = Number(prompt("Enter withdrawal amount: "));

//   // Input validation
//   if (isNaN(withdraw) || withdraw <= 0) {
//     console.log("Invalid amount. Enter a positive number.");
//     continue; // Does not count as an attempt
//   }

//   // Check if sufficient balance exists
//   if (withdraw > balance) {
//     console.log("Insufficient balance. Withdrawal failed.");
//     attempts++; // This counts as an attempt
//     continue;
//   }

//   // Successful withdrawal
//   balance -= withdraw;
//   console.log(`Withdrawal successful. Remaining balance: ${balance}`);

//   attempts++; // Only successful / attempted withdrawal counts
// }

// if (balance === 0) {
//   console.log("Account balance reached zero. No more withdrawals allowed.");
// }

// if (attempts >= 3) {
//   console.log("Maximum attempts reached. Try again later.");
// }

// console.log(`Transaction ended. Final balance: ${balance}`);

// Find the greatest number among three numbers

// Shop discount - description on graphic

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// // input from user
// const amount = Number(prompt("Enter your amount: "));

// let discount = 0;

//   if (amount > 0 && amount <= 5000) {
//     discount = 0;
//   } else if(amount > 5000 && amount <=7000) {
//     discount = 5;
//   } else if(amount > 7000 && amount <= 9000) {
//     discount = 10;
//   } else {
//     discount = 20
//   }

//   console.log('payable amount ' + (amount - (discount*amount)/100));

// Shop discount - description on graphic

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// // Input from user
// let unit = Number(prompt("Enter unit: "));
// let amount = 0;

// if(unit > 400) {
//     amount = (unit - 400) * 13;
//     unit = 400;
// }

// if(unit > 200 && unit <= 400) {
//     amount = amount + (unit - 200)
//     unit = 200;
// }
// if(unit > 100 && unit <= 200) {
//     amount = amount + (unit - 100) * 6;
//     unit = 100;
// }

// amount = amount + (unit*4.2)
// console.log(amount);

import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Enter a natural number: "));

function printNaturalNumgers(num) {
  if (!Number.isInteger(num) || num < 1) {
    console.log("Invalid Input");
    return;
  }
  for (let i = 1; i <= num; i++) {
    process.stdout.write(i.toString());
    if (i < n) {
      process.stdout.write(" ");
    }
  }
}
printNaturalNumgers(n);
