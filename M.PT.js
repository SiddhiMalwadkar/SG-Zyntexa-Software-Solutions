document.addEventListener("DOMContentLoaded", () => {

  /*  Reveal Animation */
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

  /*  Stats Counter */
  const counters = document.querySelectorAll(".stat-number");
  let started = false;

  function runCounter() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = 0;

      const increment = Math.ceil(target / 80);

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = count + suffix;
        }
      }, 20);
    });
  }

  const statSection = document.getElementById("mptStats");
  if (statSection) {
    const statObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          runCounter();
        }
      });
    }, { threshold: 0.35 });

    statObserver.observe(statSection);
  }

});
