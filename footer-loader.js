document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.getElementById("footer-placeholder");
  if (!placeholder) return;

  fetch("footer.html")
    .then(function (res) {
      if (!res.ok) throw new Error("Failed to load footer.html");
      return res.text();
    })
    .then(function (html) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Bring footer.css along with the footer, if this page doesn't already have it
      const footerLink = doc.querySelector('link[href="footer.css"]');
      if (footerLink && !document.querySelector('link[href="footer.css"]')) {
        document.head.appendChild(footerLink.cloneNode(true));
      }

      // Drop the footer markup into the placeholder
      placeholder.innerHTML = doc.body.innerHTML;

      // Wire up the email tooltip now that it actually exists in the DOM
      if (typeof initFooterInteractions === "function") {
        initFooterInteractions();
      }
    })
    .catch(function (err) {
      console.error("Could not load footer:", err);
    });
});