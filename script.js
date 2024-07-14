// Smooth scrolling for navigation links (optional)
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.hero a, .nav a'); // adjust selectors as needed

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior
    const href = this.getAttribute('href');
    const targetSection = document.querySelector(href);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple animation for the hero section (optional)
const hero = document.querySelector('.hero');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  hero.style.opacity = 1 - scrollPosition / 200; // Adjust opacity change based on scroll position
});

