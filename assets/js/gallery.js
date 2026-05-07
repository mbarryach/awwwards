gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

let firstScrambleText = document.querySelector('.first-scramble-text')

gsap.fromTo(".first-scramble-text",
    {
        opacity: 0,
    },
    {
        opacity: 1,
        duration: 2.5,
    
        scrambleText: {
            text: "Horizontal Scrolling Gallery",
            chars: "!<>-_\\/[]{}",
            speed: 0.6
        },
    
        scrollTrigger: {
            trigger: ".gallery-section",
            start: "top 90%"
        }
    });

const gallery = document.querySelector(".gallery-grid");

gsap.to(gallery, {
    x: () => -(gallery.scrollWidth - window.innerWidth + 120),

    ease: "none",

    scrollTrigger: {
        trigger: ".gallery-section",
        start: "top top",
        end: () => `+=${gallery.scrollWidth}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true
    }
}); 