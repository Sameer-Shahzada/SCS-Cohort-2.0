const mouseFollower = document.querySelector('.mouse-follower');

let x = 0;
let y = 0;

addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    x = clientX;
    y = clientY;
    // animate();

})

function animate() {
    mouseFollower.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
}
animate();