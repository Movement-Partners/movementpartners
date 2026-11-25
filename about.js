const toggles = document.querySelectorAll('.about-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const shouldOpen = toggle.getAttribute('aria-expanded') !== 'true';

    toggles.forEach((item) => {
      const open = item === toggle && shouldOpen;
      item.setAttribute('aria-expanded', String(open));
      document.getElementById(item.getAttribute('aria-controls'))
        .setAttribute('aria-hidden', String(!open));
    });
  });
});
