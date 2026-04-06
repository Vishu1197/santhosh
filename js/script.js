gsap.registerPlugin(ScrollTrigger);

/* PIN SCROLL (APPLE EFFECT) */
const panels = gsap.utils.toArray(".panel");

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});

/* TEXT REVEAL */
gsap.utils.toArray(".panel h2, .panel p, .panel h1").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    }
  });
});

/* EXPERIENCE SCROLL ANIMATION */
gsap.utils.toArray(".exp div").forEach((el, i) => {
  gsap.to(el, {
    opacity: 1,
    x: 50,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      scrub: true
    }
  });
});
