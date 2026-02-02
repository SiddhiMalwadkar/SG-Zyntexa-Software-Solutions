// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 80;

    if (top < triggerPoint) el.classList.add("show");
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Stats counter animation
let statsStarted = false;

function animateStats() {
  const statsSection = document.getElementById("mcStats");
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 120;

  if (sectionTop < triggerPoint && !statsStarted) {
    statsStarted = true;

    const numbers = document.querySelectorAll(".stat-number");

    numbers.forEach((num) => {
      const target = +num.getAttribute("data-target");
      const suffix = num.getAttribute("data-suffix") || "";
      let current = 0;

      const step = Math.max(1, Math.floor(target / 60));

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        num.innerText = current + suffix;
      }, 25);
    });
  }
}

window.addEventListener("scroll", animateStats);
window.addEventListener("load", animateStats);
