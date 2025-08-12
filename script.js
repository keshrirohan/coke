window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const hamburgerCheckbox = document.querySelector(".hamburger input");
const menuLinks = document.querySelector(".menu-links");

if (hamburgerCheckbox) {
  hamburgerCheckbox.addEventListener("change", () => {
    if (hamburgerCheckbox.checked) {
      menuLinks.style.left = "0";
      gsap.to(menuLinks, { duration: 0.5, left: 0, ease: "power2.out" });
      document.body.style.overflow = "hidden";
    } else {
      menuLinks.style.left = "-1000px";
      document.body.style.overflow = "";
    }
  });
}

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".first",
    start: "top top",
    end: "5% top",
    markers: true,
    scrub: true,
  },
});

tl.from(
  ".nav",
  {
    y: -100,
    duration: 1,
    ease: "power1.inOut",
  },
  "<"
);

tl.from(
  ".coke",
  {
    scale: 0,
    duration: 1,
  },
  "<"
);
tl.from(".glass", {
  y: 800,
});

tl.from(
  ".ice-bulk",
  {
    scale: 0,
    duration: 1,
  },
  "<"
);

tl.from(
  ".ice-cube",
  {
    scale: 0,
    duration: 1,
    y: -400,
  },
  "<"
);

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".first",
    start: "60% center",
    end: "bottom center ",
    markers: false,
    scrub: true,
  },
});

tl2.to(
  ".coke",
  {
    y: -100,
    duration: 1,
    ease: "power2.out",
  },
  "<"
);
tl2.to(
  ".ice-bulk",
  {
    y: -100,
    duration: 1,
    ease: "power2.out",
  },
  "<"
);
tl2.to(
  ".glass",
  {
    y: 210,
    duration: 1,
    scale: 0.3,
    ease: "power2.out",
  },
  "<"
);

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second",
    start: "top center",
    end: "center center",
    markers: false,
    scrub: true,
  },
});

tl3.to(".glass", {
  right: "418px",
  top: "128px",
});

tl3.to(".ice-cube", {
  top: "290px",
  left: "500px",
  scale: 0.2,
});

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    start: "-40% center",
    end: "center center",
    markers: false,
    scrub: true,
  },
});

tl4.to(
  ".ice-cube",
  {
    top: "1150px",
    left: "10px",
    scale: 0.25,
    rotate: "20deg",
    opacity: 0.75,
  },
  "<"
);

tl4.to(
  ".glass",
  {
    scale: 0.2,
    top: "916px",
    left: "0px",
  },
  "<"
);

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    start: "top center",
    end: "center center",
    markers: false,
    scrub: true,
  },
});

tl5.from(
  ".card-1-coke",
  {
    right: "300px",
    scale: 0.5,
    rotate: "20deg",
    opacity: 0.75,
  },
  "<"
);
tl5.from(
  ".card-3-coke",
  {
    left: "300px",
    scale: 0.5,
    rotate: "-20deg",
    opacity: 0.75,
  },
  "<"
);

tl5.from(".card-1-ice,.card-3-ice", {
  scale: 0,
  rotate: "20deg",
  opacity: 0.75,
});
 
