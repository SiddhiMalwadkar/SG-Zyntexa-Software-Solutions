document.addEventListener("DOMContentLoaded", () => {

  const programs = {
    research: {
      title: "Research Programs",
      desc: "Streams supported for research-oriented institutions (PhD/MPhil enabled).",
      icon: "bi-mortarboard",
      items: [
        { name: "Science", icon: "bi-clipboard2-pulse", link: "science.html" },
        { name: "Pharmacy", icon: "bi-capsule", link: "pharmacy.html" },
        { name: "Dental", icon: "bi-heart-pulse", link: "dental.html" },
        { name: "Physiotherapy", icon: "bi-activity", link: "physiotherapy.html" },
        { name: "Law", icon: "bi-bank", link: "law.html" },
        { name: "Management", icon: "bi-briefcase", link: "management.html" },
        { name: "Architecture", icon: "bi-building", link: "architecture.html" },
        { name: "Engineering", icon: "bi-gear", link: "engineering.html" },
      ]
    },

    pg: {
      title: "Post Graduate Programs",
      desc: "Advanced programs designed for specialization and leadership outcomes.",
      icon: "bi-award",
      items: [
        { name: "Management (MBA)", icon: "bi-briefcase", link: "MBA.html" },
        { name: "Law (LLM)", icon: "bi-bank", link: "llm.html" },
        { name: "Journalism", icon: "bi-newspaper", link: "journalism.html" },
        { name: "Mass Communication", icon: "bi-megaphone", link: "MassCommunication.html" },
        { name: "Hotel Management", icon: "bi-building", link: "HM.html" },
        { name: "Architecture (M.Arch)", icon: "bi-building", link: "M.arch.html" },
        { name: "Design (M.Des)", icon: "bi-palette", link: "M.Des.html" },
        { name: "Physiotherapy (MPT)", icon: "bi-activity", link: "M.PT.html" },
        { name: "Pharmacy (M.Pharm)", icon: "bi-capsule", link: "M.Pharm.html" },

      ]
    },

    ug: {
      title: "Under Graduate Programs",
      desc: "Core degree programs across academic and professional disciplines.",
      icon: "bi-journal-bookmark",
      items: [
        { name: "Engineering (B.Tech)", icon: "bi-gear", link: "btech.html" },
        { name: "Commerce (B.Com)", icon: "bi-cash-coin", link: "bcom.html" },
        { name: "Arts (BA)", icon: "bi-book", link: "ba.html" },
        { name: "Science (B.Sc)", icon: "bi-clipboard2-pulse", link: "bsc.html" },
        { name: "Pharmacy (B.Pharm)", icon: "bi-capsule", link: "bpharm.html" },
        { name: "Dental (BDS)", icon: "bi-heart-pulse", link: "bds.html" },
        { name: "Physiotherapy (BPT)", icon: "bi-activity", link: "bpt.html" },
        { name: "Architecture (B.Arch)", icon: "bi-building", link: "B.Arch.html" },
        { name: "Hotel Management (BHM)", icon: "bi-building", link: "BHM.html" },
      ]
    },

    jr: {
      title: "Jr. College & Schools",
      desc: "Streams supported for junior college and school-level operations.",
      icon: "bi-backpack",
      items: [
        { name: "Science", icon: "bi-clipboard2-pulse", link: "JRScience.html" },
        { name: "Commerce", icon: "bi-cash-coin", link: "JRCommerce.html" },
        { name: "Arts", icon: "bi-book", link: "JRArts.html" }
      ]
    },

    distance: {
      title: "Distance Education",
      desc: "Programs delivered through distance learning and flexible education formats.",
      icon: "bi-wifi",
      items: [
        { name: "Management (MBA Distance)", icon: "bi-briefcase", link: "MBAdist.html" },
        { name: "Commerce", icon: "bi-cash-coin", link: "Commercedist.html" },
        { name: "Arts", icon: "bi-book", link: "Artsdist.html" },
        { name: "Mass Communication", icon: "bi-megaphone", link: "MassCommunicationdist.html" },
        { name: "Law", icon: "bi-bank", link: "LawDist.html" },
        { name: "Journalism", icon: "bi-newspaper", link: "Journalismdist.html" }
      ]
    },

    cert: {
      title: "Certifications",
      desc: "Short programs and certifications for skill-building and professional growth.",
      icon: "bi-patch-check",
      items: [
        { name: "Hotel Management (Short Courses)", icon: "bi-building", link: "short-hotel.html" },
        { name: "Design (Certificate)", icon: "bi-palette", link: "short-design.html" },
        { name: "Journalism (Certificate)", icon: "bi-newspaper", link: "short-journalism.html" },
        { name: "Management (Executive)", icon: "bi-briefcase", link: "short-management.html" }
      ]
    }
  };

    const categoryGrid = document.getElementById("programsCategoryGrid");

  if (!categoryGrid) {
    console.error("programsCategoryGrid not found!");
    return;
  }

  /* ================= RENDER CATEGORY CARDS ================= */
  Object.keys(programs).forEach((key, index) => {
    const cat = programs[key];

    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 reveal-up";
    col.style.transitionDelay = `${index * 0.08}s`; //  stagger auto

    col.innerHTML = `
      <div class="program-category-card" data-key="${key}">
        <div class="program-category-inner">
          <div class="d-flex align-items-start gap-3 mb-3">
            <div class="category-icon">
              <i class="bi ${cat.icon}"></i>
            </div>
            <div>
              <div class="category-title">${cat.title}</div>
              <div class="category-desc">${cat.desc}</div>
            </div>
          </div>

          <div class="category-meta">
            <div class="pill-count">${cat.items.length} Programs</div>
            <button class="open-btn" type="button">
              Explore <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    categoryGrid.appendChild(col);
  });

  /* ================= OPEN MODAL ================= */
  categoryGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".program-category-card");
    if (!card) return;

    const key = card.getAttribute("data-key");
    openProgramModal(key);
  });

  function openProgramModal(categoryKey) {
    const data = programs[categoryKey];

    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalDesc").innerText = data.desc;

    const modalIcon = document.getElementById("modalIcon");
    modalIcon.className = `bi ${data.icon}`;

    const modalProgramsGrid = document.getElementById("modalProgramsGrid");
    modalProgramsGrid.innerHTML = "";

    data.items.forEach((item, idx) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6 reveal-up";
      col.style.transitionDelay = `${idx * 0.06}s`;

      col.innerHTML = `
        <a class="modal-program-link" href="${item.link}">
          <div class="modal-program-card">
            <div class="modal-program-head">
              <div class="modal-program-icon">
                <i class="bi ${item.icon}"></i>
              </div>

              <div>
                <p class="modal-program-name">${item.name}</p>
              </div>

              <div class="modal-program-go">
                <i class="bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </a>
      `;

      modalProgramsGrid.appendChild(col);
    });

    const modal = new bootstrap.Modal(document.getElementById("programModal"));
    modal.show();

    //  trigger reveal for modal items (after rendering)
    runRevealObserver();
  }

  /* ================= SCROLL REVEAL  ================= */
  function runRevealObserver() {
    const revealElements = document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains("show")) revealObserver.observe(el);
    });
  }

  //  Run reveal on load
  runRevealObserver();

});