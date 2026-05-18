(() => {
    if (!window.gsap) return;

    const hasScrollTrigger = Boolean(window.ScrollTrigger);
    const hasSplitText = Boolean(window.SplitText);
    const plugins = [window.ScrollTrigger, window.SplitText].filter(Boolean);

    if (plugins.length) {
        gsap.registerPlugin(...plugins);
    }

    const maskTargets = gsap.utils.toArray(
        ".gsap-section h3, .gsap-section .text-mask"
    );

    const boxes = gsap.utils.toArray(".gsap-section .box");

    function animateFallback() {
        gsap.set(maskTargets, { opacity: 1 });

        gsap.from(maskTargets, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "expo.out",
            scrollTrigger: hasScrollTrigger
                ? {
                      trigger: ".gsap-section",
                      start: "top 70%",
                      once: true,
                  }
                : null,
        });
    }

    function initTextMasking() {
        if (!maskTargets.length) return;

        if (!hasSplitText) {
            animateFallback();
            return;
        }

        maskTargets.forEach((target) => {
            SplitText.create(target, {
                type: "words,lines",
                linesClass: "masked-line",
                mask: "lines",
                autoSplit: true,
                onSplit: (self) => {
                    gsap.set(target, { opacity: 1 });

                    return gsap.from(self.lines, {
                        yPercent: 110,
                        opacity: 0,
                        duration: 0.85,
                        stagger: 0.08,
                        ease: "expo.out",
                        scrollTrigger: hasScrollTrigger
                            ? {
                                  trigger: target,
                                  start: "top 82%",
                                  once: true,
                              }
                            : null,
                    });
                },
            });
        });
    }

    function initBoxes() {
        if (!boxes.length) return;

        gsap.from(boxes, {
            y: 70,
            opacity: 0,
            scale: 0.92,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: hasScrollTrigger
                ? {
                      trigger: ".gsap-boxes",
                      start: "top 85%",
                      once: true,
                  }
                : null,
        });
    }

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

    fontsReady.then(() => {
        initTextMasking();
        initBoxes();
    });
})();
