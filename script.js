(function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      const expanded = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  dropdowns.forEach(function (dropdown) {
    const button = dropdown.querySelector('[data-dropdown-btn]');
    if (!button) return;

    button.addEventListener('click', function () {
      dropdown.classList.toggle('open');
    });
  });

  document.addEventListener('click', function (event) {
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
      }
    });
  });
})();
