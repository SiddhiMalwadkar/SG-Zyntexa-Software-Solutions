document.addEventListener("DOMContentLoaded", () => {

  //  Scroll reveal animation
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

  //  Stats Counter Animation
  const counters = document.querySelectorAll(".stat-number");
  let started = false;

  function startCounters() {
    if (started) return;
    started = true;

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = 0;

      const step = Math.max(1, Math.floor(target / 60));

      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.textContent = count + suffix;
      }, 25);
    });
  }

  const statsSection = document.getElementById("marchStats");
  if (statsSection) {
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) startCounters();
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }

});
