let btn = document.getElementById("changeBtn");
let box = document.getElementById("box");

btn.addEventListener("click", function() {
    console.log("Button clicked!");
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    let color = `rgb(${c1}, ${c2}, ${c3})`;
    box.style.backgroundColor = color;
})