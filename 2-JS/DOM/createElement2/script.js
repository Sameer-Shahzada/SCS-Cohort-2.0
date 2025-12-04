const button = document.querySelector('button');
const main = document.querySelector('main');

// Utility functions (optional but clean)
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () => `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;

button.addEventListener('click', () => {

    const div = document.createElement('div');

    const x = random(0, 100);
    const y = random(0, 100);
    const rotation = random(0, 360);
    // const scale = Math.random() * 2 + 0.5;

    // div.textContent = arr[textIndex];
    div.style.color = randomColor();
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;
    div.style.transform = `rotate(${rotation}deg)`;
    div.style.backgroundColor = randomColor();

    main.appendChild(div);

    // console.log('Button clicked');
});
