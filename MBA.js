// Reveal animation on scroll
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));


// Stats counter animation
const statNums = document.querySelectorAll(".stat-number");
let statsPlayed = false;

function runStatsCounter() {
  if (statsPlayed) return;
  statsPlayed = true;

  statNums.forEach(num => {
    const target = +num.getAttribute("data-target");
    const suffix = num.getAttribute("data-suffix") || "";
    let current = 0;

    const increment = Math.max(1, Math.floor(target / 80));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        num.textContent = target + suffix;
        clearInterval(timer);
      } else {
        num.textContent = current + suffix;
      }
    }, 20);
  });
}

const statsSection = document.querySelector("#mbaStats");

if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) runStatsCounter();
    });
  }, { threshold: 0.3 });

  statsObserver.observe(statsSection);
}
