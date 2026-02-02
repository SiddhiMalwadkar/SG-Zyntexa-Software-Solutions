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
  const statSection = document.getElementById("jsciStats");
  const statNumbers = document.querySelectorAll(".stat-number");
  let started = false;

  function animateStats() {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute("data-target");
      const suffix = stat.getAttribute("data-suffix") || "";
      let count = 0;
      const speed = 35;

      const updateCount = () => {
        const increment = Math.ceil(target / 60);
        count += increment;

        if (count >= target) {
          stat.textContent = target + suffix;
        } else {
          stat.textContent = count + suffix;
          setTimeout(updateCount, speed);
        }
      };

      updateCount();
    });
  }

  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        animateStats();
      }
    });
  }, { threshold: 0.25 });

  statObserver.observe(statSection);

});
