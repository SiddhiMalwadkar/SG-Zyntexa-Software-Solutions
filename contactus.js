const form = document.getElementById("xyzContactForm");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", () => {
  setTimeout(() => {
    successBox.style.display = "block";
    form.reset();
  }, 800);
});

/* ================= SCROLL REVEAL ANIMATION ================= */
const revealElements = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));
