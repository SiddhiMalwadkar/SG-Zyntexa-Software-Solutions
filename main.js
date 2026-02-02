  window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");
    if (loader) {
      loader.classList.add("hide");
      setTimeout(() => loader.remove(), 600);
    }
  });

setTimeout(() => {
  const loader = document.getElementById("page-loader");
  if (loader) loader.remove();
}, 3000);
const words = [
  "Education",
  "Institutions",
  "Digital Learning"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
const carouselEl = document.getElementById("heroCarousel");

if (carouselEl) {
  const carousel = new bootstrap.Carousel(carouselEl, {
    interval: 2000,
    pause: false,
    ride: "carousel",
    wrap: true
  });

  // Resume carousel when tab regains focus
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      carousel.cycle();
    }
  });
}
document.querySelectorAll(".custom-dropdown > a").forEach(drop => {
  drop.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("show");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  document.querySelectorAll(".custom-dropdown").forEach(drop => {
    if (!drop.contains(e.target)) {
      drop.classList.remove("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); //  animate once
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -80px 0px",
    }
  );

  revealElements.forEach((el) => observer.observe(el));
});
