// ====================== FIXED CTA ON SCROLL ======================

const cta = document.querySelector("#cta");
const cta_primary = document.querySelector("#primary-cta");
const cta_secondary = document.querySelector("#secondary-cta");

function scrollCTA(condition, transition) {
  let scrolled = condition;

  if (scrolled >= 80) {
    cta.style.transition = transition;
    cta.classList.add("scroll--cta");
    cta_primary.innerHTML = '<i class="fas fa-shipping-fast"></i>';
    cta_primary.style.width = "50px";
    cta_primary.style.height = "50px";
    cta_primary.style.display = "flex";
    cta_primary.style.borderRadius = "50%";
    cta_primary.style.alignItems = "center";
    cta_primary.style.justifyContent = "center";
    cta_secondary.style.display = "none";
  } else {
    cta.classList.remove("scroll--cta");
    cta_primary.textContent = "Ship now";
    cta_primary.style.width = "auto";
    cta_primary.style.height = "auto";
    cta_primary.style.borderRadius = "0";
    cta_primary.style.display = "inline-block";
    cta_secondary.style.display = "inline-block";
  }
}

// Smooth transition on scroll
window.addEventListener("scroll", function () {
  scrollCTA(window.scrollY, "top 600ms ease-in-out, right 600ms ease-in-out");
});

// No transition when page reloads
window.addEventListener("load", function () {
  scrollCTA(window.pageYOffset, "none");
});
