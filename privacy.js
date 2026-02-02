document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".legal-content h3");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = "1";
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((sec) => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(20px)";
    sec.style.transition = "all 0.5s ease";
    observer.observe(sec);
  });
});
