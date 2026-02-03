export function initCommon() {
    // ===== Hamburger Menu =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        // Toggle menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ===== Scroll Animations =====
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => entry.target.classList.add('active'), delay);
                observer.unobserve(entry.target); // Optional: only animate once
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    scrollAnimateElements.forEach((el, index) => {
        if (!el.dataset.delay) el.dataset.delay = index * 100; // stagger if no delay set
        observer.observe(el);
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ===== Navbar Shadow on Scroll =====
    const navbar = document.querySelector('.navbar');
    const handleNavbarShadow = () => {
        if (navbar) {
            navbar.style.boxShadow = window.pageYOffset > 100
                ? '0 4px 30px rgba(0,204,102,0.2)'
                : '0 2px 20px rgba(0,204,102,0.1)';
        }
    };

    // ===== Parallax Hero =====
    const hero = document.querySelector('.hero');
    const handleParallax = () => {
        if (hero) hero.style.transform = `translate3d(0, ${window.pageYOffset * 0.5}px, 0)`;
    };

    // Throttle scroll events for performance
    let lastScroll = 0;
    const throttleScroll = () => {
        const now = performance.now();
        if (now - lastScroll > 16) { // ~60fps
            handleNavbarShadow();
            handleParallax();
            lastScroll = now;
        }
        requestAnimationFrame(throttleScroll);
    };
    requestAnimationFrame(throttleScroll);

    // ===== Active Nav Link Highlight =====
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPath = link.getAttribute('href').split('#')[0];
        if (linkPath === current || (current === '' && linkPath === 'index.html')) {
            link.style.color = 'var(--primary-green)';
        }
    });
}
