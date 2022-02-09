// ====================== SCROLL TRIGGERS ======================

if (wideScreen.matches) {
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

  let tls1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".card1",
      start: "center bottom",
    },
  });

  tls1.from(".card1", {
    duration: 1,
    x: -50,
    opacity: 0,
  });

  tls1.from(
    ".card2",
    {
      duration: 1,
      x: 50,
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

  let tls2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".locations__box",
      start: "center bottom",
    },
  });

  tls2.from(".location1", {
    duration: 1,
    x: -100,
    opacity: 0,
  });

  tls2.from(
    ".location2",
    {
      duration: 1,
      x: -100,
      opacity: 0,
    },
    "-=0.5"
  );

  tls2.from(
    ".map",
    {
      duration: 2,
      x: 100,
      opacity: 0,
    },
    "-=2"
  );

  gsap.from(".title3", {
    scrollTrigger: {
      trigger: ".title3",
      start: "center bottom",
    },
    duration: 1,
    x: -300,
    opacity: 0,
  });

  gsap.from(".social__row", {
    scrollTrigger: {
      trigger: ".social__row",
      start: "center bottom",
    },
    duration: 2,
    x: 200,
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

  gsap.from(".title4", {
    scrollTrigger: {
      trigger: ".title4",
      start: "center bottom",
    },
    duration: 1,
    x: -300,
    opacity: 0,
  });

  gsap.from(".contact__box", {
    scrollTrigger: ".contact__box",
    duration: 1,
    y: 50,
    opacity: 0,
  });
}
