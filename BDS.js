document.addEventListener("DOMContentLoaded", () => {

  const animatedItems = document.querySelectorAll(
    ".reveal, .report-pill"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedItems.forEach(el => observer.observe(el));

});
