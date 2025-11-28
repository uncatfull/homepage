document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const cards = document.querySelectorAll('.surface-card');

  // Animate cards in with stagger
  cards.forEach((card, index) => {
    const delay = 90 * index;
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.animation = `cardEnter var(--motion-duration) var(--ease-spring) forwards`;
    }, delay);
  });

  // Open card link on click & keyboard
  cards.forEach(card => {
    const url = card.getAttribute('data-url');

    card.addEventListener('click', () => {
      if (url) window.open(url, '_blank', 'noopener,noreferrer');
    });

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
      }
    });

    const button = card.querySelector('.card-cta');
    if (button) {
      button.addEventListener('click', e => {
        e.stopPropagation();
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
      });
    }
  });

  // Theme toggle button logic
  toggle.addEventListener('click', () => {
    if (body.classList.contains('theme-dark')) {
      body.classList.replace('theme-dark', 'theme-light');
      toggle.textContent = '🌙';
    } else {
      body.classList.replace('theme-light', 'theme-dark');
      toggle.textContent = '🌞';
    }
  });
});
