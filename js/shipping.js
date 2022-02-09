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

  let tls1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".expertise__box",
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

  gsap.from(".shipment__box", {
    scrollTrigger: {
      trigger: ".method",
      start: "center bottom",
    },
    duration: 1,
    y: 50,
    opacity: 0,
  });

  gsap.from(".box__truck", {
    scrollTrigger: {
      trigger: ".box__truck",
      start: "center bottom",
    },
    duration: 1,
    x: -80,
    opacity: 0,
  });
}

// ====================== FORM ======================

const rapidButton = document.querySelector("#rapid");
const regularButton = document.querySelector("#regular");
const rapidForm = document.querySelector(".form__rapid");
const regularForm = document.querySelector(".form__regular");

rapidButton.addEventListener("click", function () {
  rapidButton.classList.add("rapid--active");
  regularButton.classList.remove("regular--active");
  rapidForm.classList.add("form--active");
  regularForm.classList.remove("form--active");
});

regularButton.addEventListener("click", function () {
  regularButton.classList.add("regular--active");
  rapidButton.classList.remove("rapid--active");
  regularForm.classList.add("form--active");
  rapidForm.classList.remove("form--active");
});

// Pickup location

const pickupButton = document.querySelector("#pickup");
const pickupInput = document.querySelectorAll(".pickup__input");

pickupButton.addEventListener("click", function () {
  for (let i = 0; i < pickupInput.length; i++) {
    pickupInput[i].classList.toggle("pickup--active");

    if (pickupInput[i].classList.contains("pickup--active")) {
      pickupButton.textContent = "Cancel";
    } else {
      pickupButton.textContent = "Change pickup location";
    }
  }
});
