/* Animate SVG */
let path1 = document.querySelector(".path-1");
let path2 = document.querySelector(".path-2");
animate = () => {
  const start = " 0 0 0 0";
  const end1 =
    "M478.5 872C364 736.5 0 -8.5 0 -8.5H1286.5V578.5C1286.5 578.5 593 1007.5 478.5 872ZF";
  const end2 =
    "M268 722.5C153.5 587 0 -8.5 0 -8.5H1286.5V578.5C1286.5 578.5 382.5 858 268 722.5Z";
  const tl = gsap.timeline();
  tl.to(".inside-layer", 0.1, { opacity: 0 })
    .to(path1, 0.8, { attr: { d: start }, ease: Power3.easeIn })
    .to(path1, 0.8, {
      attr: { d: end1 },
      ease: Power3.easeOut,
    })
    .to(path2, 0.8, { attr: { d: start }, ease: Power3.easeIn }, "<")
    .to(".inside-layer", 0.1, { opacity: 1 })
    .to(path2, 0.8, {
      attr: { d: end2 },
      ease: Power3.easeOut,
    });
};

animate();

const tl = gsap.timeline({ delay: 1, ease: Power3.easeIn });
tl.from(".navbar", 1, {
  y: -100,
})
  .from(".content", 1, {
    y: 30,
    opacity: 0,
  })
  .from(".girl", 1, {
    x: -350,
  })
  .from(".react", 1, {
    y: 50,
    opacity: 0,
  });

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });


  