document.addEventListener("DOMContentLoaded", () => {

  /* ================= SCROLL REVEAL  ================= */
  const runRevealObserver = () => {
    const revealElements = document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target); //  animate only once
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains("show")) {
        revealObserver.observe(el);
      }
    });
  };

  runRevealObserver();


  /* ================= WORKFLOW TABS (HR/ACADEMICS/EXAM...) ================= */
  const tabs = document.querySelectorAll(".xyz-tab");
  const panes = document.querySelectorAll(".xyz-pane");

  if (tabs.length > 0 && panes.length > 0) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-tab");

        // remove active from all tabs
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // hide all panes
        panes.forEach((p) => p.classList.add("d-none"));

        // show target pane
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.remove("d-none");
        }
      });
    });
  }

});
