window.addEventListener("DOMContentLoaded", () => {
});

document.addEventListener ("mousemove",(event) => {
    const x =event.clientX;
    const y =event.clientY;
    console.log("X:",x, "Y:",y);
})

const blackEye = document.querySelector('.black-eye')

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const moveX = (x / windowWidth - 0.5) * 15;
    const moveY = (y / windowHeight - 0.5) * 15;

    blackEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
});