import promptSync from "prompt-sync";
const prompt = promptSync();

let pass = prompt("Enter your password: ");

while(pass !== "stop") {
    console.log(pass);
    pass = prompt("Enter your password: ");
}