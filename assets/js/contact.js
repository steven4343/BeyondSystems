import { initCommon } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize common site features
    initCommon();

    // ===== Contact Form Handling =====
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.createElement('div'); // for success/error messages
    formMessage.className = 'form-message';
    if (contactForm) contactForm.appendChild(formMessage);

    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation: ensure name, email, message are not empty
        const name = contactForm.querySelector('input[name="name"]')?.value.trim();
        const email = contactForm.querySelector('input[name="email"]')?.value.trim();
        const message = contactForm.querySelector('textarea[name="message"]')?.value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
            return;
        }

        // Optional: simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }

        // Here you would normally send data to a server via fetch/AJAX
        // For now, just show a success message
        formMessage.textContent = 'Thank you for your message! We will get back to you as soon as possible.';
        formMessage.style.color = 'green';

        // Reset form fields
        contactForm.reset();
    });
});
