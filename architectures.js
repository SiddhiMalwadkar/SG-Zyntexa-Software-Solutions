document.addEventListener("DOMContentLoaded", () => {

  /* ================= Diagram click highlight ================= */
  const pairs = document.querySelectorAll(".pair");
  const lines = document.querySelectorAll(".conn-line");

  function clearActive(){
    pairs.forEach(p => p.classList.remove("active"));
    lines.forEach(l => l.classList.remove("highlight"));
  }

  pairs.forEach(pair => {
    pair.addEventListener("click", () => {
      clearActive();
      pair.classList.add("active");

      const lineId = pair.getAttribute("data-line");
      const lineEl = document.getElementById(lineId);
      if(lineEl) lineEl.classList.add("highlight");
    });
  });

  //  default highlight middle
  window.addEventListener("load", () => {
    const middle = document.querySelector('.pair[data-line="line3"]');
    if(middle) middle.click();
  });


  /* ================= Scroll Reveal ================= */
  const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
  );

  revealElements.forEach(el => revealObserver.observe(el));

});
