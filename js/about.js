// ====================== SCROLL TRIGGERS ======================

if (wideScreen.matches) {
  let tls1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".vision",
      start: "center bottom",
    },
  });

  tls1.from(".title1", {
    duration: 1,
    x: -100,
    opacity: 0,
  });

  tls1.from(".paragraph1", {
    duration: 1,
    y: 50,
    opacity: 0,
  });

  tls1.from(
    ".vision-img",
    {
      duration: 2,
      x: 100,
      opacity: 0,
    },
    "-=2"
  );

  let tls2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".approach",
      start: "center bottom",
    },
  });

  tls2.from(".title2", {
    duration: 1,
    x: -100,
    opacity: 0,
  });

  tls2.from(".paragraph2", {
    duration: 1,
    y: 50,
    opacity: 0,
  });

  tls2.from(
    ".approach-img",
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

  let tls3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".team__box",
      start: "center bottom",
    },
  });

  tls3.from(".profile-1", {
    duration: 1,
    x: -100,
    opacity: 0,
  });

  tls3.from(
    ".member__quote",
    {
      duration: 1,
      y: 100,
      opacity: 0,
    },
    "-=1"
  );

  tls3.from(
    ".member__image",
    {
      duration: 1,
      y: -100,
      opacity: 0,
    },
    "-=1"
  );

  tls3.from(
    ".profile-2",
    {
      duration: 1,
      x: -100,
      opacity: 0,
    },
    "-=0.6"
  );

  tls3.from(
    ".profile-3",
    {
      duration: 1,
      x: -100,
      opacity: 0,
    },
    "-=0.6"
  );

  tls3.from(
    ".profile-4",
    {
      duration: 1,
      x: -100,
      opacity: 0,
    },
    "-=0.6"
  );

  tls3.from(
    ".profile-5",
    {
      duration: 1,
      x: -100,
      opacity: 0,
    },
    "-=0.6"
  );
}

// ====================== TEAM MEMBERS ======================

// Grab elements
const profile1 = document.querySelector(".profile-1");
const profile2 = document.querySelector(".profile-2");
const profile3 = document.querySelector(".profile-3");
const profile4 = document.querySelector(".profile-4");
const profile5 = document.querySelector(".profile-5");

const qt1 = document.querySelector(".qt-1");
const qt2 = document.querySelector(".qt-2");
const qt3 = document.querySelector(".qt-3");
const qt4 = document.querySelector(".qt-4");
const qt5 = document.querySelector(".qt-5");

const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");
const img3 = document.querySelector(".img-3");
const img4 = document.querySelector(".img-4");
const img5 = document.querySelector(".img-5");

// Put elements into arrays
const profiles = [profile1, profile2, profile3, profile4, profile5];

const quotes = [qt1, qt2, qt3, qt4, qt5];

const images = [img1, img2, img3, img4, img5];

// Loop through arrays removing any active classes and then add the active class to the selected profile
function switchProfile(profile, quote, image) {
  for (let i = 0; i < profiles.length; i++) {
    profiles[i].classList.remove("profile--active");
    quotes[i].classList.remove("qt--active");
    images[i].classList.remove("img--active");
  }
  profile.classList.add("profile--active");
  quote.classList.add("qt--active");
  image.classList.add("img--active");
}

profile1.addEventListener("click", function () {
  switchProfile(profile1, qt1, img1);
});

profile2.addEventListener("click", function () {
  switchProfile(profile2, qt2, img2);
});

profile3.addEventListener("click", function () {
  switchProfile(profile3, qt3, img3);
});

profile4.addEventListener("click", function () {
  switchProfile(profile4, qt4, img4);
});

profile5.addEventListener("click", function () {
  switchProfile(profile5, qt5, img5);
});
