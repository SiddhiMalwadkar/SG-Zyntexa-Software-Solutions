
  function filterBlogs(category) {
    document.querySelectorAll('.category-filter button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.blog-item').forEach(item => {
      item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
    });
  }
/* ================= BLOG FILTER ================= */
function filterBlogs(category, event) {
  // Active button
  document.querySelectorAll(".category-filter button")
    .forEach(btn => btn.classList.remove("active"));

  event.target.classList.add("active");

  // Filter cards
  document.querySelectorAll(".blog-item").forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

/* ================= SCROLL REVEAL ANIMATION ================= */
const revealElements = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));
