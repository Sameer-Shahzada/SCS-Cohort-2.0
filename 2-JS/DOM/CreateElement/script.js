const arr = [
    'This is Md. Sameer Shahzada',
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'Love to build scalable web apps',
    'Modern Web Design'
];

const button = document.querySelector('button');
const main = document.querySelector('main');

// Utility functions (optional but clean)
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () => `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;

button.addEventListener('click', () => {

    const h1 = document.createElement('h1');

    const x = random(0, 100);
    const y = random(0, 100);
    const textIndex = random(0, arr.length);
    const rotation = random(0, 360);
    const scale = Math.random() * 2 + 0.5;

    h1.textContent = arr[textIndex];
    h1.style.color = randomColor();
    h1.style.left = `${x}%`;
    h1.style.top = `${y}%`;
    h1.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    h1.classList.add('random-text');
    

    main.appendChild(h1);

    console.log('Button clicked');
});
