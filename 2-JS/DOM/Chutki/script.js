let chutki = document.querySelector("img");
let msg = document.querySelector("h2 span");

chutki.addEventListener('mouseenter', () => {
    msg.innerHTML = 'chutki se dur ho ja 🤬🤬🤬';
})

chutki.addEventListener('mouseleave', () => {
    msg.innerHTML = 'Good ab door hi rehna 🤗🤗🤗';
}) 