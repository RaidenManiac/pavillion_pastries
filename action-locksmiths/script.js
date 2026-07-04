const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

// The concept uses a pre-filled email so the quote flow works without a backend.
// In production, replace this handler with the business's CRM or form endpoint.
document.querySelector('#quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Quote request: ${data.get('service')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email') || 'Not provided'}\nService: ${data.get('service')}\n\n${data.get('message')}`
  );
  window.location.href = `mailto:dispatch@actionlocksmiths.ca?subject=${subject}&body=${body}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();

