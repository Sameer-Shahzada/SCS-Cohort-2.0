let counter = document.getElementById("counter");
let incr = document.getElementById("incr");
let decr = document.getElementById("decr");

incr.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});

decr.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});
