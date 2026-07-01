const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

function activateTab(tab, moveFocus = false) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });

  panels.forEach((panel) => {
    const selected = panel.id === tab.dataset.menu;
    panel.classList.toggle('active', selected);
    panel.hidden = !selected;
  });

  if (moveFocus) tab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    let targetIndex = index;
    if (event.key === 'ArrowRight') targetIndex = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') targetIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') targetIndex = 0;
    else if (event.key === 'End') targetIndex = tabs.length - 1;
    else return;

    event.preventDefault();
    activateTab(tabs[targetIndex], true);
  });
});

const nav = document.querySelector('.nav-wrap');
const toggle = document.querySelector('.menu-toggle');

function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
}

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav-wrap nav a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});
