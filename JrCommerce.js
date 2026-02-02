document.addEventListener("DOMContentLoaded", () => {

  // Reveal animation
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

  // Stats counter animation
  const statSection = document.querySelector("#jcomStats");
  const statNumbers = document.querySelectorAll(".stat-number");
  let statsStarted = false;

  const runCounter = () => {
    statNumbers.forEach(num => {
      const target = parseFloat(num.dataset.target);
      const suffix = num.dataset.suffix || "";
      let current = 0;

      const step = Math.max(1, Math.floor(target / 60));

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        num.textContent = current + suffix;
      }, 20);
    });
  };

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsStarted) {
        statsStarted = true;
        runCounter();
      }
    });
  }, { threshold: 0.3 });

  if (statSection) {
    statsObserver.observe(statSection);
  }

});
