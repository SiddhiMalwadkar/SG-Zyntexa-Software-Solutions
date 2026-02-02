// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Counter animation for stats
let statsAnimated = false;

function animateStats() {
  const statsSection = document.getElementById("jourStats");
  if (!statsSection) return;

  const rect = statsSection.getBoundingClientRect();
  const inView = rect.top < window.innerHeight * 0.85;

  if (inView && !statsAnimated) {
    statsAnimated = true;

    document.querySelectorAll(".stat-number").forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = 0;

      const step = Math.ceil(target / 60);

      const update = () => {
        count += step;
        if (count >= target) {
          counter.innerText = target + suffix;
        } else {
          counter.innerText = count + suffix;
          requestAnimationFrame(update);
        }
      };

      update();
    });
  }
}

window.addEventListener("scroll", animateStats);
window.addEventListener("load", animateStats);
