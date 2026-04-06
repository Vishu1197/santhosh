gsap.registerPlugin(ScrollTrigger);

/* HERO ANIMATION */
gsap.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero-sub", {
  y: 50,
  opacity: 0,
  delay: 0.3,
  duration: 1
});

/* SECTION FADE */
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 85%"
    }
  });
});

/* EXPERIENCE TEXT ANIMATION */
gsap.utils.toArray(".exp div").forEach((el) => {
  gsap.from(el, {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 90%"
    }
  });
});
