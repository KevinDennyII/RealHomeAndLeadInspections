# JavaScript for Real Home and Lead Inspections
# Mobile nav uses CSS checkbox toggle; keep this file for future enhancements.

document.addEventListener('DOMContentLoaded', () => {
  // Close mobile nav when a link is clicked
  const toggle = document.getElementById('nav-toggle');
  document.querySelectorAll('nav.links a').forEach((link) => {
    link.addEventListener('click', () => {
      if (toggle && toggle.checked) {
        toggle.checked = false;
      }
    });
  });
});
