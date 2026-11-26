// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Copy Discord name
const copyBtn = document.getElementById('copy-discord');
const toast = document.getElementById('toast');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const name = document.getElementById('discord-name').textContent.trim();
    try {
      await navigator.clipboard.writeText(name);
      showToast('Discord name copied!');
    } catch {
      showToast('Copy failed – please copy it manually.');
    }
  });
}

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}
