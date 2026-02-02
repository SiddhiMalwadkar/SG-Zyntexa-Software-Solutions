//  Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


//  Stats Counter Animation
const statsSection = document.querySelector("#mdesStats");
const statNumbers = document.querySelectorAll(".stat-number");
let statsStarted = false;

function startStats() {
  statNumbers.forEach((num) => {
    const target = +num.getAttribute("data-target");
    const suffix = num.getAttribute("data-suffix") || "";
    let current = 0;

    const step = Math.ceil(target / 80);

    const counter = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(counter);
      }
      num.innerText = current + suffix;
    }, 20);
  });
}

function handleStatsScroll() {
  if (!statsSection) return;

  const top = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (!statsStarted && top < windowHeight - 120) {
    statsStarted = true;
    startStats();
  }
}

window.addEventListener("scroll", handleStatsScroll);
window.addEventListener("load", handleStatsScroll);
