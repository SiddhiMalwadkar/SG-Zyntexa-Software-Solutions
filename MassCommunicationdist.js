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
  const statNumbers = document.querySelectorAll(".stat-number");
  let statsPlayed = false;

  const runCounter = () => {
    statNumbers.forEach(num => {
      const target = +num.getAttribute("data-target");
      const suffix = num.getAttribute("data-suffix") || "";
      let current = 0;

      const step = Math.max(1, Math.floor(target / 50));

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        num.innerText = current + suffix;
      }, 25);
    });
  };

  const statsSection = document.querySelector("#dmcStats");
  if(statsSection){
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsPlayed) {
          statsPlayed = true;
          runCounter();
        }
      });
    }, { threshold: 0.30 });

    statsObserver.observe(statsSection);
  }

});
