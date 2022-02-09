// ====================== HERO TIMELINE ======================

let tlh = gsap.timeline({ delay: 0.5 });

tlh.from("#intro", {
  duration: 1.5,
  opacity: 0,
  y: -60,
});

tlh.from(
  ".city",
  {
    duration: 1.5,
    opacity: 0,
    x: 100,
  },
  "-=1"
);

// ====================== CITY TIMELINE ======================

let tlc = gsap.timeline({ delay: 2, repeat: -1 });

tlc.from(
  "#truck1",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "+=2"
);

tlc.to(
  "#truck1",
  {
    duration: 5,
    x: -800,
    y: -460,
    ease: "none",
  },
  "-=1"
);

tlc.to(
  "#truck1",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=1"
);

// Next truck

tlc.from(
  "#truck3",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "+=2"
);

tlc.to(
  "#truck3",
  {
    duration: 5.5,
    x: -834,
    y: 480,
    ease: "none",
  },
  "-=1"
);

tlc.to(
  "#truck3",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=1"
);

// Next truck

tlc.from(
  "#truck2",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=2"
);

tlc.to(
  "#truck2",
  {
    duration: 5,
    x: -800,
    y: -460,
    ease: "none",
  },
  "-=2"
);

tlc.to(
  "#truck2",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=1"
);

// Next truck

tlc.from(
  "#truck4",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=1"
);

tlc.to(
  "#truck4",
  {
    duration: 5.5,
    x: -834,
    y: 480,
    ease: "none",
  },
  "-=1"
);

tlc.to(
  "#truck4",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=1"
);

// ====================== FADED TRUCK TIMELINE ======================

let tlf1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".statement",
    start: "center bottom",
  },
  repeat: -1,
  delay: 1,
});

tlf1.from("#truckfade1", {
  duration: 1,
  opacity: 0,
  ease: "none",
});

tlf1.to(
  "#truckfade1",
  {
    duration: 8,
    x: -1320,
    y: -760,
    ease: "none",
  },
  "-=1"
);

tlf1.to(
  "#truckfade1",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "-=4.5"
);

tlf1.to(
  "#truckfade1",
  {
    duration: 1,
    opacity: 0,
    ease: "none",
  },
  "+=6"
);

// ====================== SCROLL TRIGGERS ======================

if (wideScreen.matches) {
  gsap.from(".statement-text", {
    scrollTrigger: {
      trigger: ".statement",
      start: "center bottom",
    },
    duration: 2,
    x: -300,
    opacity: 0,
  });

  gsap.from(".title1", {
    scrollTrigger: {
      trigger: ".title1",
      start: "center bottom",
    },
    duration: 1,
    x: -300,
    opacity: 0,
  });

  gsap.from(".features", {
    scrollTrigger: {
      trigger: ".features",
      start: "center bottom",
    },
    duration: 2,
    x: 200,
    opacity: 0,
  });

  let tls = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      start: "center bottom",
    },
  });

  tls.from(".card1", {
    duration: 1,
    y: -50,
    opacity: 0,
  });

  tls.from(
    ".card2",
    {
      duration: 1,
      y: 50,
      opacity: 0,
    },
    "-=0.5"
  );

  tls.from(
    ".card3",
    {
      duration: 1,
      y: -50,
      opacity: 0,
    },
    "-=0.5"
  );

  gsap.from(".title2", {
    scrollTrigger: {
      trigger: ".title2",
      start: "center bottom",
    },
    duration: 1,
    x: -300,
    opacity: 0,
  });

  gsap.from(".reviews__box", {
    scrollTrigger: {
      trigger: ".reviews__box",
      start: "center bottom",
    },
    duration: 1,
    y: 50,
    opacity: 0,
  });

  gsap.from(".download__box", {
    scrollTrigger: {
      trigger: ".download__box",
      start: "center bottom",
    },
    duration: 1,
    y: 50,
    opacity: 0,
  });
}

// ====================== SWIPER ======================

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 600,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  // autoplay: {
  //   delay: 5000,
  // },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 60,
    slideShadows: false,
    setTransition: 2000,
  },
});
