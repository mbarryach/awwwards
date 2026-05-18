gsap.registerPlugin(ScrollTrigger);

const deepParallaxSection = document.querySelector(".deep-parallax-section");

if (deepParallaxSection) {
    const deepParallaxImage = deepParallaxSection.querySelector(".deep-parallax-img");
    const deepParallaxContent = deepParallaxSection.querySelector(".deep-parallax-content");
    const deepParallaxWord = deepParallaxSection.querySelector(".deep-parallax-word");

    gsap.fromTo(
        deepParallaxImage,
        { yPercent: -8, scale: 1.12 },
        {
            yPercent: 12,
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
                trigger: deepParallaxSection,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        deepParallaxContent,
        { y: 120, opacity: 0 },
        {
            y: -80,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: deepParallaxSection,
                start: "top 85%",
                end: "bottom 25%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        deepParallaxWord,
        { xPercent: 12 },
        {
            xPercent: -18,
            ease: "none",
            scrollTrigger: {
                trigger: deepParallaxSection,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        }
    );
}
