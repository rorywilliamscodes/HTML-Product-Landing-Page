// script.js

// Smooth scrolling to section when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Validate email input using HTML5 validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', () => {
  emailInput.setCustomValidity('');
  emailInput.checkValidity();
});

emailInput.addEventListener('invalid', () => {
  if (emailInput.value === '') {
    emailInput.setCustomValidity('Please enter your email address.');
  } else {
    emailInput.setCustomValidity('Please enter a valid email address.');
  }
});