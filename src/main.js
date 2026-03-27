// Initialize Lucide icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const logoText = document.querySelector('.logo-text');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
    navbar.classList.remove('navbar-transparent');
    logoText.classList.add('text-dark');
    logoText.classList.remove('text-white');
    mobileMenuToggle.classList.add('text-dark');
    mobileMenuToggle.classList.remove('text-white');
    navLinks.forEach(link => {
      link.classList.add('text-dark');
      link.classList.remove('text-white');
    });
  } else {
    navbar.classList.remove('navbar-scrolled');
    navbar.classList.add('navbar-transparent');
    logoText.classList.remove('text-dark');
    logoText.classList.add('text-white');
    mobileMenuToggle.classList.remove('text-dark');
    mobileMenuToggle.classList.add('text-white');
    navLinks.forEach(link => {
      link.classList.remove('text-dark');
      link.classList.add('text-white');
    });
  }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Booking Form Handling
const bookingForm = document.getElementById('booking-form');
const bookingFormContainer = document.getElementById('booking-form-container');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    bookingFormContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 0;">
        <div style="width: 5rem; height: 5rem; color: var(--brand-gold); margin: 0 auto 1.5rem auto;">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h2 style="font-size: 2.25rem; margin-bottom: 1rem; color: var(--brand-dark);">Request Received!</h2>
        <p style="color: var(--gray-500); margin-bottom: 2rem;">
          Thank you for choosing Tap Hotel. Our reservation team will contact you shortly 
          to confirm your booking details.
        </p>
        <button onclick="window.location.reload()" style="color: var(--brand-gold); font-weight: 700; text-decoration: underline; text-underline-offset: 8px; background: none; border: none; cursor: pointer;">
          Make another request
        </button>
      </div>
    `;
  });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
