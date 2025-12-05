const cursor = document.querySelector('#cursor');

document.addEventListener('pointermove', (e) => {
    // const cursor = document.querySelector('#cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


document.addEventListener('click', () => {
    cursor.style.transform = "translate(-50%, -50%) rotate(30deg)";
    setTimeout(() => {
        cursor.style.transform = "translate(-50%, -50%) rotate(0deg)";
    }, 100);
});
