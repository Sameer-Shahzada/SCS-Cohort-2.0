import promptSync from "prompt-sync";
const prompt = promptSync();

let attempt = 0;
const systemPassword = "Rolex";

while (attempt < 3) {
    const userPassword = prompt("Enter your password: ");
    
    if (userPassword === systemPassword) {
        console.log("Password matched. Access granted.");
        break;
    } else {
        attempt++;
        console.log("Incorrect password. Attempts left:", 3 - attempt);
    }
}

if (attempt === 3) {
    console.log("Account locked due to multiple failed attempts");
}