/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("show");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// Stats counter animation
const statNumbers = document.querySelectorAll(".stat-number");
let counterStarted = false;

function animateCounters() {
  const statsSection = document.getElementById("engStats");
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 80 && !counterStarted) {
    counterStarted = true;

    statNumbers.forEach((num) => {
      const target = +num.getAttribute("data-target");
      const suffix = num.getAttribute("data-suffix") || "";
      let current = 0;

      const step = Math.ceil(target / 60);

      const timer = setInterval(() => {
        current += step;

        if (current >= target) {
          num.innerText = target + suffix;
          clearInterval(timer);
        } else {
          num.innerText = current + suffix;
        }
      }, 20);
    });
  }
}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);
