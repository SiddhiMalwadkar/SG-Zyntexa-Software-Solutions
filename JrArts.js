document.addEventListener("DOMContentLoaded", () => {

  //  Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

  //  Stats Counter
  const counters = document.querySelectorAll(".stat-number");

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      let current = 0;

      const step = Math.max(1, Math.floor(target / 60));

      const updateCount = () => {
        current += step;
        if (current >= target) {
          counter.textContent = target + suffix;
          return;
        }
        counter.textContent = current + suffix;
        requestAnimationFrame(updateCount);
      };

      updateCount();
      counterObserver.unobserve(counter);
    });
  }, { threshold: 0.35 });

  counters.forEach(c => counterObserver.observe(c));

});
