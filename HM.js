// ================= REVEAL ANIMATION =================
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
let counterStarted = false;

function animateCounters() {
  const statsSection = document.getElementById("hmStats");
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100 && !counterStarted) {
    counterStarted = true;

    const counters = document.querySelectorAll(".stat-number");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";

      let start = 0;
      const duration = 1200;
      const stepTime = Math.max(10, Math.floor(duration / target));

      const timer = setInterval(() => {
        start++;
        counter.textContent = start + suffix;
        if (start >= target) {
          clearInterval(timer);
          counter.textContent = target + suffix;
        }
      }, stepTime);
    });
  }
}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => observer.observe(el));