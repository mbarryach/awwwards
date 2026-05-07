// --- SMOOTH SCROLL LENIS---
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// --- CUSTOM CURSOR ---
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    if (!cursor) return;

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});