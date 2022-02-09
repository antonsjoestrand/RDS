// ====================== SCROLL TRIGGERS ======================

const wideScreen = window.matchMedia("(min-width: 960px)");
const narrowScreen = window.matchMedia("(max-width: 959px)");

// ====================== FADED TRUCK FOOTER ======================

let tlf3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "center bottom",
  },
  repeat: -1,
  delay: 1,
});

tlf3.from("#truckfade3", {
  duration: 1,
  opacity: 0,
  ease: "none",
});

tlf3.to(
  "#truckfade3",
  {
    duration: 8,
    x: -1320,
    y: -760,
    ease: "none",
  },
  "-=1"
);

tlf3.to(
  "#truckfade3",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=4"
);

tlf3.to(
  "#truckfade3",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "+=6"
);

// ====================== HAMBURGER MENU ======================

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile__menu");
const menu_drop1 = document.querySelector(".drop1");
const menu_drop2 = document.querySelector(".drop2");
const menu_dropMenu1 = document.querySelector(".dropmenu1");
const menu_dropMenu2 = document.querySelector(".dropmenu2");
const arrow_drop1 = document.querySelector(".arrow--drop1");
const arrow_drop2 = document.querySelector(".arrow--drop2");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

menu_drop1.addEventListener("click", function () {
  menu_drop1.classList.toggle("drop--active");
  menu_dropMenu1.classList.toggle("drop--active");
  arrow_drop1.classList.toggle("rotate");
});

menu_drop2.addEventListener("click", function () {
  menu_drop2.classList.toggle("drop--active");
  menu_dropMenu2.classList.toggle("drop--active");
  arrow_drop2.classList.toggle("rotate");
});

// ====================== FADED TRUCK TIMELINE ======================

let tlf2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".download__box",
    start: "center bottom",
  },
  repeat: -1,
  delay: 1,
});

tlf2.from("#truckfade2", {
  duration: 1,
  opacity: 0,
  ease: "none",
});

tlf2.to(
  "#truckfade2",
  {
    duration: 6,
    x: -370,
    y: 210,
    ease: "power2.out",
  },
  "-=1"
);

tlf2.to(
  "#truckfade2",
  {
    duration: 4,
    x: -370,
    y: 210,
    ease: "none",
  },
  "+=0"
);

tlf2.to(
  "#truckfade2",
  {
    duration: 4,
    x: -800,
    y: 460,
    ease: "none",
  },
  "-=1"
);

tlf2.to(
  "#truckfade2",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=4"
);

tlf2.to(
  "#truckfade2",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "+=6"
);
