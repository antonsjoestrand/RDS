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

  let tls1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".offering__box",
      start: "center bottom",
    },
  });

  tls1.from(".item1", {
    duration: 1,
    y: 50,
    opacity: 0,
  });

  tls1.from(
    ".item2",
    {
      duration: 1,
      y: -50,
      opacity: 0,
    },
    "-=0.5"
  );

  tls1.from(
    ".item3",
    {
      duration: 1,
      y: 50,
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
      trigger: ".description__box",
      start: "center bottom",
    },
  });

  tls2.from(".d-title", {
    duration: 1,
    x: -100,
    opacity: 0,
  });

  tls2.from(".d-paragraph", {
    duration: 1,
    y: 50,
    opacity: 0,
  });

  tls2.from(
    ".d-image",
    {
      duration: 2,
      x: 100,
      opacity: 0,
    },
    "-=2"
  );

  tls2.from(".d-action", {
    duration: 1,
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
