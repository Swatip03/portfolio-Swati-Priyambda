// script.js

// Smooth scroll to sections
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Optional: Scroll to top when page loads
window.onload = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
