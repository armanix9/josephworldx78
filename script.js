// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('day-mode');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('day-mode') ? 'day' : 'night'
  );
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'day') {
    document.body.classList.add('day-mode');
    themeSwitch.checked = true;
  }
});

// Gallery Modal
const modal = document.getElementById('photoModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    document.body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
