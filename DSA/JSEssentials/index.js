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

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const n = Number(prompt("Enter a natural number: "));

// function printNaturalNumgers(num) {
//   if (!Number.isInteger(num) || num < 1) {
//     console.log("Invalid Input");
//     return;
//   }
//   for (let i = 1; i <= num; i++) {
//     process.stdout.write(i.toString());
//     if (i < n) {
//       process.stdout.write(" ");
//     }
//   }
// }
// printNaturalNumgers(n);

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(prompt("Enter any number: "));

// // create a function to find out the factors
// function findFactors(n) {
//   let divisors = []; // an empty array to store the factors.
//   for (let i = n; i >= 1; i--) {
//     if (n % i === 0) {
//       divisors.push(i);
//     }
//   }
//   divisors.sort((a, b) => a - b).forEach((d) => console.log(d));
// }
// findFactors(num);

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const startRange = Number(prompt("Enter range start point: "));
// const endRange = Number(prompt("Enter range end point: "));

// function sumEvenOddInRange(start, end) {
//   if (!Number.isInteger(start) || !Number.isInteger(end)) {
//     console.log("Invalid Input");
//     return;
//   }
//   // swap if start is greater than end
//   if (start > end) {
//     // let temp = start;
//     // start = end;
//     // end = temp;

//     [start, end] = [end, start];
//   }
//   let evenSum = 0;
//   let oddSum = 0;

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenSum += i;
//     } else {
//       oddSum += i;
//     }
//   }
//   console.log("evenSum: ", evenSum);
//   console.log("oddSum: ", oddSum);
// }
// sumEvenOddInRange(startRange, endRange);

// ----------- | Prime Number Programs | -----------

// -> 1st Approach

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = parseInt(prompt("Enter a number: "));

// function isPrime(n) {
//   // Prime numbers must be greater than 1
//   if (!Number.isInteger(n) || n <= 1) {
//     return "Not a prime number";
//   }

//   // Check divisibility up to √n
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return "Not a prime number";
//     }
//   }
//   return "Prime number";
// }
// console.log(isPrime(num));

// -> 2nd Approach
// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(prompt("Enter a number: "));

// function isPrime(n) {
//   if (!Number.isInteger(n) || n <= 1) {
//     return "Not Prime";
//   }

//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//     }
//   }

//   return count === 2 ? "Prime" : "Not Prime";
// }
// console.log(isPrime(num));

// -> 3rd Approach
// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(prompt("Enter a number: "));

// // create a function to check prime number
// function isPrime(n) {
//   if (n <= 1) {
//     console.log("not prime");
//   } else {
//     let count = 0;
//     for (let i = 2; i <= n / 2; i++) {
//       if (n % i == 0) {
//         count++;
//       }
//     }
//     if (count == 0) {
//       console.log("prime number");
//     } else {
//       console.log("not a prime number");
//     }
//   }
// }
// isPrime(num);

// -> 4th Approach

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(prompt("Enter a number: "));

// // create a function to check prime number
// function isPrime(n) {
//   if (n <= 1) {
//     console.log("not prime");
//   } else if (n == 2) {
//     console.log("prime");
//   } else if (n % 2 == 0) {
//     console.log("not prime");
//   } else {
//     let isPrime = true;
//     for (let i = 0; i <= Math.floor(Math.sqrt(n)); i += 2) {
//       if (n % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     console.log(isPrime ? "prime" : "not prime");
//   }
// }
// isPrime(num);

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(prompt("Enter base value: "));
// const power = Number(prompt("Enter exponent value: "));

// function calculatePower(base, exponent) {
//   if (!Number.isInteger(base) || !Number.isInteger(exponent) || exponent < 0) {
//     return "Invalid Input";
//   }

//   let result = 1;
//   for (let i = 1; i <= exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(calculatePower(num, power));

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(prompt("Enter a number:"));

// Function to check the given number is Strong Number or not
// function strongNumber(digit) {
//   if (!Number.isInteger(digit) || digit <= 0) {
//     return "Invalid Input";
//   }

//   const digits = num.toString().split("");
//   let sumOfFactorials = 0;

//   digits.forEach((digit) => {
//     let d = Number(digit);
//     let fact = 1;

//     for (let i = 1; i <= d; i++) {
//       fact *= i;
//     }

//     sumOfFactorials += fact;
//   });

//   return sumOfFactorials === num ? "Strong Number" : "Not a Strong Number";
// }
// console.log(strongNumber(num));

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const n = Number(prompt("Enter a number: "));

// function strongNumber(num) {
//     let temp = num;
//     let sum = 0;

//     while (temp > 0) {
//         let digit = temp % 10;
//         let fact = 1;

//         for (let i = 1; i <= digit; i++) {
//             fact *= i;
//         }

//         sum += fact;
//         temp = Math.floor(temp / 10);
//     }

//     return sum === num ? "Strong Number" : "Not a Strong Number";
// }
// console.log(strongNumber(n));

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const num = Number(prompt("Enter a number: "));

// function reverseNumber(n) {
//   if (!Number.isInteger(n) || n < 0) {
//     return "Invalid Input";
//   }

//   if(n === 0) {
//     return 0;
//   }

//   let rev = 0;

//   while (n > 0) {
//     rev = rev * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }

//   return rev;
// }

// console.log(reverseNumber(num));

// -> Reverse a Number Using recursion

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const num = Number(prompt("Enter a number: "));

// function reverseNumber(n, rev = 0) {
//     if (!Number.isInteger(n) || n < 0) {
//         return "Invalid Input";
//     }

//     if (n === 0) {
//         return rev;
//     }

//     return reverseNumber(
//         Math.floor(n / 10),
//         rev * 10 + (n % 10)
//     );
// }
// console.log(reverseNumber(num));

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const num = Number(prompt("Enter a number: "));

// function countDigits(n) {
//     if (!Number.isInteger(n) || n < 0) {
//         return "Invalid Input";
//     }

//     if (n === 0) return 1;

//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10);
//     }

//     return count;
// }
// console.log(countDigits(num));

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// const isbnNum = prompt("Enter a 10-digit ISBN number (without dashes): ");

// function isISBNValid(isbn) {
//   let copy = isbn,
//     count = 0;

//   while (isbn > 0) {
//     count++;
//     isbn = Math.floor(isbn / 10);
//   }
//   if (count !== 10) {
//     return "Invalid ISBN Number";
//   } else {
//     let res = 0;
//     while (copy > 0) {
//       let digit = copy % 10;
//       res = res + digit * count;
//       count--;
//       copy = Math.floor(copy / 10);
//     }
//     if (res % 11 === 0) {
//       return "Valid ISBN Number";
//     } else {
//       return "Invalid ISBN Number";
//     }
//   }
// }
// console.log(isISBNValid(Number(isbnNum)));


// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const system = Math.floor(Math.random() * 100) + 1;
// function guessingGame(machine) {
//     let guess;

//     do {
//         guess = Number(prompt("Guess a number between 1 and 100: "));

//         if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
//             console.log("Invalid Number");
//             continue;
//         }

//         if (guess > machine) {
//             console.log("Too large number");
//         } else if (guess < machine) {
//             console.log("Too small number");
//         } else {
//             console.log("Congratulations! You guessed the correct number.");
//         }

//     } while (guess !== machine);
// }

// guessingGame(system);

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const num = Number(prompt("Enter a number: "));

// function isHarshad(n) {
//     if(!Number.isInteger(n) || n < 0) {
//         return 'Invalid Input';
//     }
    
//     if(n === 0) {
//         return 'Not Harshad Number';
//     }

//     let original = n;
//     let sum = 0;

//     while(n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10)
//     }
//     return original % sum === 0 ? 'Harshad Number' : 'Not Harshad Number';
// }
// console.log(isHarshad(num))

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const n = Number(prompt("Enter a number:"));

// create a function 
// function strongNumber(num) {
//     if(!Number.isInteger(num) || num <= 0) {
//         return 'Invalid Input';
//     }

//     let sum = 0; // to store the sum of factorials of digits

//     // Outer loop: extracts digits one by one
//     for(let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
//         let digit = temp % 10; // to extract the last digit of temp number
//         let fact = 1;

//         // Inner loop: calculates factorial of the digit
//         for(let i = 1; i <= digit; i++) {
//             fact *= i;
//         }
//         sum += fact; // Adds the factorial of the current digit to sum.
//     }
//     return sum === num ? "Strong Number" : "Not a Strong Number";
// }

// console.log(strongNumber(n));

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const r = Number(prompt("Enter a number for rows: "));
// const c = Number(prompt("Enter a number for columns: "));

// function squarePattern(rows, cols) {
//     if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows <= 0 || cols <= 0) {
//         return "Invalid Input";
//     }

//     for(let i = 1; i <= rows; i++) {
//         for(let j = 1; j <= cols; j++) {
//             process.stdout.write("* ");
//         }
//         console.log();
//     }
// }
// squarePattern(r, c);

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const r = Number(prompt("Enter a number for rows: "));
// const c = Number(prompt("Enter a number for columns: "));

// function printSquarePattern(rows, cols) {
//     if(!Number.isInteger(rows) || !Number.isInteger(cols) || rows <= 0 || cols <= 0) {
//         return "Invalid Input";
//     } 

//     let result = ''; 
//     // Outer loop 
//     for(let i = 1; i <= rows; i++) {
//         // Inner Loop 
//         for(let j = 1; j <= cols; j++) {
//             result += '* '; // Append '*' and a space to result string
//         }
//         result += '\n'; // Append newline character after each row
//     }
//     return result;
// }
// console.log(printSquarePattern(r, c));

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const r = Number(prompt("Enter a number for rows: "));

// function printInvertedRightAngeldTriangle(rows) {
//     let result = '';
    
//     // Outer loop
//     for(let i = 1; i <= rows; i++) {
//         // Inner Loop
//         for(let j = rows; j >= i; j--) {
//             result += '* ';
//         }
//         result += '\n';
//     }
//     return result;
    
// }
// console.log(printInvertedRightAngeldTriangle(r));

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const r = Number(prompt("Enter a number for rows: "));

// function printMirrorRightAngleTriangle(rows) {

//     if(!Number.isInteger(rows) || rows <= 0) {
//         return "Invalid Input";
//     }

//     let result = '';

//     // Outer loop 
//     for(let i = 1; i <= rows; i++) {
//         // Inner loop: print leading spaces. Spaces decrease as row number increases
//         for(let j = 1; j <= rows -i; j++) {
//             result += '  ';
//         }
//         // Inner loop: print stars. Stars increase as row number increases | right angle triangle part 
//         for(let j = 1; j <= i; j++) {
//             result += '* ';
//         }
//         // Move cursor to next line after completing one row
//         result += '\n';
//     }
//     return result;
// }
// console.log(printMirrorRightAngleTriangle(r));

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const r = Number(prompt("Enter a number for rows: "));

// function printRightAngleTriangle(rows) {

//     if(!Number.isInteger(rows) || rows <= 0) {
//         return "Invalid Input";
//     }

//     let result = '';
    
//     // Outer loop: to control number of rows
//     for(let i = 1; i <= rows; i++) {
//         // Inner loop: to control number of columns & print '*' for each column in a row
//         for(let j = 1; j <= i; j++) {
//             // result += '* ';     
//             // result += `${j}`;   // to print numbers instead of '* ';    
//             result += `${String.fromCharCode(64 + j)}`; // to print alphabets instead of '* ';
//         }
//         result += '\n';
        
//     }
//     return result;
    
// }
// console.log(printRightAngleTriangle(r));

import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt('Enter a number: '));

const arr = new Array(n);
// const arr = [];

for(let i = 0; i <= arr.length; i++) {
    arr[i] = Number(prompt("Enter a value: "));
}

console.log(arr)