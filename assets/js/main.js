// Fade out per transizione pagine
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    if (link.href.includes("#") || !link.href.includes(location.hostname)) return;

    link.addEventListener("click", function(e) {
      e.preventDefault();
      const url = this.href;
      document.body.classList.add("fade-out");
      setTimeout(() => { window.location = url; }, 400);
    });
  });
});
