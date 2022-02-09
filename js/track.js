// ====================== FADED TRUCK TIMELINE ======================

let tlf1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".search",
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
    duration: 9,
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
  "-=5.5"
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
  gsap.from(".track", {
    scrollTrigger: {
      trigger: ".track",
      start: "center bottom",
    },
    duration: 1,
    y: 50,
    opacity: 0,
  });

  gsap.from(".title1", {
    scrollTrigger: "card1",
    duration: 1,
    x: -300,
    opacity: 0,
  });

  let tls = gsap.timeline({
    scrollTrigger: {
      trigger: ".card1",
      start: "center bottom",
    },
  });

  tls.from(".card1", {
    duration: 1,
    x: -50,
    opacity: 0,
  });

  tls.from(
    ".card2",
    {
      duration: 1,
      x: 50,
      opacity: 0,
    },
    "-=0.5"
  );
}
