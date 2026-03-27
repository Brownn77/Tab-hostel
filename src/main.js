// Initialize Lucide icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const logoText = document.querySelector('.logo-text');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
    navbar.classList.remove('bg-transparent', 'py-4');
    logoText.classList.add('text-[#1A1A1A]');
    logoText.classList.remove('text-white');
    mobileMenuToggle.classList.add('text-[#1A1A1A]');
    mobileMenuToggle.classList.remove('text-white');
    navLinks.forEach(link => {
      link.classList.add('text-[#1A1A1A]');
      link.classList.remove('text-white');
    });
  } else {
    navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
    navbar.classList.add('bg-transparent', 'py-4');
    logoText.classList.remove('text-[#1A1A1A]');
    logoText.classList.add('text-white');
    mobileMenuToggle.classList.remove('text-[#1A1A1A]');
    mobileMenuToggle.classList.add('text-white');
    navLinks.forEach(link => {
      link.classList.remove('text-[#1A1A1A]');
      link.classList.add('text-white');
    });
  }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
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
      <div class="text-center py-12">
        <div class="w-20 h-20 text-[#C5A059] mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h2 class="text-4xl font-serif mb-4 text-[#1A1A1A]">Request Received!</h2>
        <p class="text-gray-500 mb-8">
          Thank you for choosing Tap Hotel. Our reservation team will contact you shortly 
          to confirm your booking details.
        </p>
        <button onclick="window.location.reload()" class="text-[#C5A059] font-bold underline underline-offset-8">
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
