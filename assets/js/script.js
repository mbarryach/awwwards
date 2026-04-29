// --- SMOOTH SCROLL LENIS---
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// --- GSAP ---
gsap.registerPlugin(ScrollTrigger);

gsap.from(".gallery-item", {
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top 80%",
  },
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 1
});

// --- CUSTOM CURSOR ---
const cursor = document.querySelector('.cursor');

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
});


// --- PARALLAX (first-image) ---
const parallaxImg = document.querySelector('.parallax-img');

function updateParallax() {
    if (!parallaxImg) return;
    const section = parallaxImg.closest('.first-image');
    const rect = section.getBoundingClientRect();
    const viewH = window.innerHeight;

    // progress: 0 when top of section hits bottom of viewport, 1 when bottom hits top
    const progress = Math.min(Math.max(
        1 - (rect.bottom / (viewH + rect.height)), 
    0), 1);
    const offset = progress * 60; // px shift total
    parallaxImg.style.transform = `translateY(${offset}px)`;
}

window.addEventListener('scroll', updateParallax, { passive: true });
updateParallax();


// --- SCROLL REVEAL ---
const reveals = document.querySelectorAll('.reveal, .right-reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
