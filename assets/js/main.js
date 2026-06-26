(() => {
  const header = document.querySelector('[data-header]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const yearTargets = document.querySelectorAll('[data-year]');
  const contactForm = document.querySelector('[data-contact-form]');
  const formStatus = document.querySelector('[data-form-status]');

  yearTargets.forEach((target) => {
    target.textContent = new Date().getFullYear();
  });

  if (header) {
    const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        formStatus.textContent = 'Please complete the required fields before testing the demo request.';
        contactForm.reportValidity();
        return;
      }

      formStatus.textContent = 'Demo checked. This form is not connected yet, so no request was sent or stored.';
      contactForm.reset();
    });
  }
})();
