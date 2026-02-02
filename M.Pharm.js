document.addEventListener("DOMContentLoaded", () => {

  // ===== Scroll Reveal =====
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));


  // ===== Stats Counter =====
  const statSection = document.querySelector("#mpharmStats");
  const statNumbers = document.querySelectorAll(".stat-number");

  function animateNumber(el, target, suffix = "") {
    let current = 0;
    const increment = Math.ceil(target / 60);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.innerText = target + suffix;
        clearInterval(timer);
      } else {
        el.innerText = current + suffix;
      }
    }, 25);
  }

  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNumbers.forEach(num => {
          const target = parseInt(num.getAttribute("data-target"));
          const suffix = num.getAttribute("data-suffix") || "";
          animateNumber(num, target, suffix);
        });
        statObserver.disconnect(); 
      }
    });
  }, { threshold: 0.3 });

  if (statSection) statObserver.observe(statSection);

});
