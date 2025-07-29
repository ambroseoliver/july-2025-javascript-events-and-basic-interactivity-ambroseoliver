// Light/Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-mode-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Counter Feature
let count = 0;
const counterValue = document.getElementById('counter-value');
document.getElementById('increment-btn').addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});
document.getElementById('decrement-btn').addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

// Collapsible FAQ
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});

// Form Validation
const form = document.getElementById('signup-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  // Name validation
  const name = document.getElementById('name').value.trim();
  const nameError = document.getElementById('name-error');
  if (name.length < 2) {
    nameError.textContent = 'Name must be at least 2 characters.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('email-error');
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Password validation
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('password-error');
  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  // Success feedback
  const formSuccess = document.getElementById('form-success');
  if (valid) {
    formSuccess.textContent = 'Form submitted successfully!';
    form.reset();
  } else {
    formSuccess.textContent = '';
  }
});