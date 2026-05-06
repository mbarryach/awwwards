// --- SMOOTH SCROLL LENIS---
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// --- CUSTOM CURSOR ---
const cursor = document.querySelector('.cursor');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const cursorLag = 0.12; // lower = more delay, higher = snappier

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    if (!cursor) return;
    cursorX += (mouseX - cursorX) * cursorLag;
    cursorY += (mouseY - cursorY) * cursorLag;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
}

if (cursor) {
    cursorX = window.innerWidth / 2;
    cursorY = window.innerHeight / 2;
    mouseX = cursorX;
    mouseY = cursorY;
    requestAnimationFrame(animateCursor);
}
