const h1 = document.querySelector("h1");
const btn = document.querySelector("button")

const messages = [
  "INITIALIZING...",
  "LOADING MODULES...",
  "ESTABLISHING CONNECTION...",
  "CONNECTION ESTABLISHED",
  "VERIFYING CREDENTIALS...",
  "ACCESS GRANTED",
  "WELCOME ROOT",
];

let text = h1.innerText;
const characters =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()-_=+[]{}|;:',.<>?/`~ ";

let interval = null;

function shuffleText() {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    h1.innerText = text
      .split("")
      .map((char, idx) => {
        if (idx < iteration) return char;

        return characters.split("")[
          Math.floor(Math.random() * (characters.length + 1))
        ];
      })
      .join("");

    if (iteration > text.length) clearInterval(interval);

    iteration += 1 / 3;
  }, 30);
}

h1.addEventListener("mouseenter", () => {
  shuffleText();
});

btn.addEventListener("click", () => {
  btn.disabled = true;
  btn.style.scale = 0;

  messages.forEach((txt, idx) => {
    setTimeout(() => {
      text = txt;
      shuffleText();

      if (idx === messages.length - 1) {
        setTimeout(() => {
          btn.disabled = false;
          btn.style.scale = 1;
        }, 3000);
      }
    }, 3000 * idx)
  })
})
