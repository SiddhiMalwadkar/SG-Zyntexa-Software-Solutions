//  EmailJS Init
(function () {
  emailjs.init("gd6QNZM2m55iHPGr-"); 
})();

const form = document.getElementById("xyzContactForm");
const successBox = document.getElementById("successBox");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //  Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const institution = document.getElementById("institution").value.trim();
  const message = document.getElementById("message").value.trim();

  //  Validations (compulsory)
  if (name.length < 3) {
    alert("Please enter a valid name (min 3 characters).");
    return;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }
  if (phone.length < 10) {
    alert("Please enter a valid mobile number.");
    return;
  }
  if (message.length < 10) {
    alert("Message should be at least 10 characters.");
    return;
  }

  //  Disable button while sending
  sendBtn.disabled = true;
  sendBtn.innerHTML = `<i class="bi bi-hourglass-split me-2"></i> Sending...`;

  //  EmailJS Params
  const templateParams = {
    from_name: name,
    from_email: email,
    phone: phone,
    institution: institution || "Not Provided",
    message: message,
  };

  //  Send Email
  emailjs
    .send("service_bvmr4ce", "template_slzviyj", templateParams)
    .then(() => {
      successBox.style.display = "block";
      form.reset();

      setTimeout(() => {
        successBox.style.display = "none";
      }, 3500);
    })
    .catch((error) => {
      alert("❌ Something went wrong. Please try again!");
      console.log("EmailJS Error:", error);
    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.innerHTML = `<i class="bi bi-send-fill me-2"></i> Send Message`;
    });
});
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
