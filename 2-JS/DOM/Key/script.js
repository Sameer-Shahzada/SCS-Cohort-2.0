let body = document.body;
let h1 = document.querySelector('h1');


document.body.addEventListener('keydown', (dets) => {
    h1.innerText = dets.key;
     console.log(dets.key);
})