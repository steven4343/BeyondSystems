/* Beyond Systems - Global JavaScript */

// ==========================================
// INITIALIZE ON DOM LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Beyond Systems - Website Initialized');
    
    // Initialize all global functions
    initHamburgerMenu();
    initScrollAnimations();
    initSmoothScroll();
    initNavbarScrollEffect();
    initActiveNavLink();
});

// ==========================================
// HAMBURGER MENU
// ==========================================

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) {
        console.log('Hamburger menu elements not found');
        return;
    }

    console.log('Hamburger menu initialized');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        console.log('Menu toggled:', navMenu.classList.contains('active'));
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initScrollAnimations() {
    const scrollAnimateElements = document.querySelectorAll(
        '.section-header, .distributor-card, .service-card, .chemical-card, ' +
        '.mining-location, .highlight-box, .mission-card, .contact-card, ' +
        '.feature-item, .about-text, .about-highlights, .contact-detail-item, ' +
        '.services-intro, .chemicals-intro, .hero-content'
    );

    if (scrollAnimateElements.length === 0) {
        console.log('No elements found for scroll animation');
        return;
    }

    console.log(`Initializing scroll animations for ${scrollAnimateElements.length} elements`);

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('scroll-animate', 'active');
                }, index * 100);
            }
        });
    }, observerOptions);

    scrollAnimateElements.forEach((element) => {
        element.classList.add('scroll-animate');
        scrollObserver.observe(element);
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 204, 102, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 204, 102, 0.1)';
        }
    });
}

// ==========================================
// ACTIVE NAV LINK
// ==========================================

function initActiveNavLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('#')[0];
        if (linkPath === currentLocation || (currentLocation === '' && linkPath === 'index.html')) {
            link.style.color = 'var(--primary-green)';
        }
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for use in other scripts
window.beyondSystems = {
    initHamburgerMenu,
    initScrollAnimations,
    initSmoothScroll,
    initNavbarScrollEffect,
    initActiveNavLink
};