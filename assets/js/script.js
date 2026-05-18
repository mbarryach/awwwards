// --- SMOOTH SCROLL LENIS---
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

const lenis = new Lenis();
window.lenis = lenis;

if (document.body.classList.contains("is-scroll-locked")) {
  lenis.stop();
}

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
