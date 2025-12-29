//-> Write a program to check whether a given 10-digit ISBN number is valid or not.
// - ISBN Formula: (d1*10 + d2*9 + d3*8 + d4*7 + d5*6 + d6*5 + d7*4 + d8*3 + d9*2 + d10*1) % 11 == 0


import promptSync from "prompt-sync";
const prompt = promptSync();

const isbnNum = prompt("Enter a 10-digit ISBN number (without dashes): ");

function isISBNValid(isbn) {
  let copy = isbn, count = 0;

  while (isbn > 0) {
    count++;
    isbn = Math.floor(isbn / 10);
  }
  if (count !== 10) {
    return "Invalid ISBN Number";
  } else {
    let res = 0;
    while(copy > 0) {
        let digit = copy % 10;
        res = res + (digit * count);
        count--;
        copy = Math.floor(copy / 10);
    }
    if (res % 11 === 0) {
        return "Valid ISBN Number";
    } else {
        return "Invalid ISBN Number";
    }
  }
}
console.log(isISBNValid(Number(isbnNum)));