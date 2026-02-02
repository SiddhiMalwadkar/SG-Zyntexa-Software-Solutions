
(function () {
  emailjs.init("gd6QNZM2m55iHPGr-"); // your public key
})();


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


document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = document.getElementById("demoBtn");
  const successBox = document.getElementById("demoSuccess");

  btn.disabled = true;
  btn.innerText = "Submitting...";

  const templateParams = {
    institution: document.getElementById("institution").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    datetime: document.getElementById("time").value,
    message: document.getElementById("message").value,
    time: new Date().toLocaleString()
  };

  emailjs.send(
    "service_f94fhkk",     // your service ID
    "template_8qa4jod",    // your template ID
    templateParams
  ).then(
    () => {
      successBox.style.display = "block";
      document.getElementById("demoForm").reset();
      btn.disabled = false;
      btn.innerText = "Request Demo";
    },
    (error) => {
      alert("❌ Failed to send request. Please try again.");
      console.error("EmailJS Error:", error);
      btn.disabled = false;
      btn.innerText = "Request Demo";
    }
  );
});
