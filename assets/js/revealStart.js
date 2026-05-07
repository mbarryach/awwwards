gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl
.fromTo(".intro-title", {
    scale: 4,
    opacity: 1,
}, {
    scale: 1,
    duration: 2,
    ease: "power4.inOut"
})

.to({}, { duration: 1 })

.to(".intro-overlay", {
    opacity: 0,
    duration: 0.5
}, "-=0.5")

.fromTo(".content h1",
{
    opacity: 0
},
{
    opacity: 1,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.2")

.fromTo(".content h1",
{
    duration: 1,
    ease: "power3.inOut"
},
{
    y: -180,
})

.fromTo(".about p", 
    { y: 50, opacity: 0, filter: "blur(10px)" }, 
    { 
        y: 400, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15,
        filter: "blur(0px)"
    }, 
    "-=0.4"
)

.fromTo(".my-name", 
    { y: 30, opacity: 0, filter: "blur(10px)" }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        filter: "blur(0px)" 
    }, 
    "-=0.5"
);