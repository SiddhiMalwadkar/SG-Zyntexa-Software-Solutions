// ================= REVEAL ON SCROLL =================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================= STATS COUNTER =================
let statsPlayed = false;

function animateCounter(el) {
  const target = +el.getAttribute("data-target");
  const suffix = el.getAttribute("data-suffix") || "";
  let current = 0;

  const speed = 40; // smaller = faster
  const step = Math.max(1, Math.floor(target / 80));

  const timer = setInterval(() => {
    current += step;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    el.textContent = current + suffix;
  }, speed);
}

function startStatsWhenVisible() {
  const statsSection = document.getElementById("llmStats");
  if (!statsSection || statsPlayed) return;

  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 150) {
    statsPlayed = true;
    document.querySelectorAll(".stat-number").forEach(animateCounter);
  }
}

window.addEventListener("scroll", startStatsWhenVisible);
window.addEventListener("load", startStatsWhenVisible);
