document.addEventListener("DOMContentLoaded", () => {

  //  Scroll Reveal
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.15 });

  reveals.forEach((el) => revealObserver.observe(el));

  //  Stats Counter
  const statNumbers = document.querySelectorAll(".stat-number");

  const animateStat = (el) => {
    const target = +el.getAttribute("data-target");
    const suffix = el.getAttribute("data-suffix") || "";
    let current = 0;

    const step = Math.max(1, Math.floor(target / 60));

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.innerText = target + suffix;
        clearInterval(timer);
      } else {
        el.innerText = current + suffix;
      }
    }, 20);
  };

  const statsSection = document.querySelector("#btechStats");
  let statsDone = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !statsDone) {
        statsDone = true;
        statNumbers.forEach((num) => animateStat(num));
      }
    });
  }, { threshold: 0.35 });

  if (statsSection) statsObserver.observe(statsSection);

});
