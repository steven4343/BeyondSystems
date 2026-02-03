/* Beyond Systems - About Page JavaScript */

// ==========================================
// INITIALIZE ABOUT PAGE
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('About Page - Initialized');
    
    // About page specific functionality
    initAboutAnimations();
    initStatCounters();
});

// ==========================================
// ABOUT PAGE ANIMATIONS
// ==========================================

function initAboutAnimations() {
    // Add staggered animation to mission cards
    const missionCards = document.querySelectorAll('.mission-card');
    
    missionCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Add hover effects to why choose cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ==========================================
// STAT COUNTERS (If you add stats later)
// ==========================================

function initStatCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length === 0) return;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterObserver.observe(counter);
    });
}

// ==========================================
// PARALLAX EFFECT (Optional)
// ==========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const pageHeader = document.querySelector('.page-header');
    
    if (pageHeader && scrolled < 800) {
        pageHeader.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});