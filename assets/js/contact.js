/* Beyond Systems - Contact Page JavaScript */

// ==========================================
// INITIALIZE CONTACT PAGE
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact Page - Initialized');
    
    // Contact page specific functionality
    initContactForm();
    initMapInteraction();
});

// ==========================================
// CONTACT FORM HANDLING
// ==========================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.log('Contact form not found');
        return;
    }

    console.log('Contact form initialized');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call in production)
        setTimeout(() => {
            // Success message
            showFormMessage('success', 'Thank you for your message! We will get back to you as soon as possible.');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
        
        // In production, send data to server:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            showFormMessage('success', 'Message sent successfully!');
            contactForm.reset();
        })
        .catch(error => {
            showFormMessage('error', 'Something went wrong. Please try again.');
        })
        .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
        */
    });
}

// ==========================================
// FORM VALIDATION
// ==========================================

function validateForm(data) {
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
        showFormMessage('error', 'Please enter a valid name');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFormMessage('error', 'Please enter a valid email address');
        return false;
    }
    
    // Validate subject
    if (!data.subject) {
        showFormMessage('error', 'Please select a subject');
        return false;
    }
    
    // Validate message
    if (!data.message || data.message.trim().length < 10) {
        showFormMessage('error', 'Please enter a message (minimum 10 characters)');
        return false;
    }
    
    return true;
}

// ==========================================
// SHOW FORM MESSAGE
// ==========================================

function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.padding = '1rem';
    messageDiv.style.marginBottom = '1rem';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.textAlign = 'center';
    
    if (type === 'success') {
        messageDiv.style.background = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
    } else {
        messageDiv.style.background = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
    }
    
    // Insert message
    const contactForm = document.getElementById('contactForm');
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.transition = 'opacity 0.5s ease';
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 500);
    }, 5000);
}

// ==========================================
// MAP INTERACTION
// ==========================================

function initMapInteraction() {
    const mapContainer = document.querySelector('.map-container');
    const mapImage = document.querySelector('.map-container img');
    
    if (!mapContainer) return;
    
    // Add click event to open in Google Maps (if map.png is used)
    mapContainer.addEventListener('click', function() {
        const location = 'Solwezi, Zambia';
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(mapsUrl, '_blank');
    });
    
    // Add hover effect
    if (mapImage) {
        mapContainer.style.cursor = 'pointer';
        
        mapContainer.addEventListener('mouseenter', function() {
            mapImage.style.transform = 'scale(1.05)';
            mapImage.style.transition = 'transform 0.3s ease';
        });
        
        mapContainer.addEventListener('mouseleave', function() {
            mapImage.style.transform = 'scale(1)';
        });
    }
}

// ==========================================
// REAL-TIME FORM VALIDATION (Optional)
// ==========================================

function initRealTimeValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Email validation
    const emailInput = document.getElementById('email');
    emailInput?.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = 'var(--gray-200)';
        }
    });
    
    // Phone validation (optional field)
    const phoneInput = document.getElementById('phone');
    phoneInput?.addEventListener('blur', function() {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (this.value && !phoneRegex.test(this.value)) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = 'var(--gray-200)';
        }
    });
}

// Initialize real-time validation
document.addEventListener('DOMContentLoaded', initRealTimeValidation);