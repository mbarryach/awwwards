gsap.registerPlugin(ScrollTrigger);

let tlHero = gsap.timeline();

tlHero
.fromTo(".content h1", 
    { y: -60, opacity: 0, filter: "blur(10px)"}, 
    { y: 0, opacity: 1, duration: 1, ease: "power3.out",   filter: "blur(0px)" }
)

.fromTo(".about p", 
    { y: 40, opacity: 0, filter: "blur(10px)" }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        filter: "blur(0px)"
    }, 
    "-=0.5"
)

.fromTo(".my-name", 
    { y: 40, opacity: 0, filter: "blur(10px)" }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out",
        filter: "blur(0px)" 
    }, 
    "-=0.4"
);