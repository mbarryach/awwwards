gsap.registerPlugin(ScrollTrigger);

let aidatext = document.querySelector('.first-image-bg-text');

gsap.fromTo(aidatext, 
{
  x: -300,
}, 
{
  x: 300,
  ease: "none",
  scrollTrigger: {
    trigger: ".first-image",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});