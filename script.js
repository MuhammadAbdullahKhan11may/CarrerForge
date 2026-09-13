document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("menu-toggle");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");

      // Only intercept real section links, not empty "#" placeholders
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // Update active state
      navLinks.forEach(function (l) {
        l.classList.remove("active");
      });
      link.classList.add("active");

      // Close mobile menu after tapping a link
      if (menuToggle) {
        menuToggle.checked = false;
      }
    });
  });
   });

function initFooterInteractions() {
  const emailBtn = document.getElementById("emailIconBtn");
  const emailTooltip = document.getElementById("emailTooltip");

  if (emailBtn && emailTooltip) {
    emailBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      emailTooltip.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!emailTooltip.contains(e.target) && !emailBtn.contains(e.target)) {
        emailTooltip.classList.remove("show");
      }
    });
  }
}
