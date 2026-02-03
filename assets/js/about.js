import { initCommon } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize common site features
    initCommon();

    // ===== About Page Animations =====
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');

    // IntersectionObserver for fade-in and slide-in animations
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const el = entry.target;

                    // Add a staggered delay for better effect
                    setTimeout(() => {
                        el.classList.add('active');
                    }, index * 150);

                    // Stop observing once element is animated
                    obs.unobserve(el);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
        }
    );

    fadeInElements.forEach(el => observer.observe(el));
    slideInElements.forEach(el => observer.observe(el));

    // ===== Optional: Team member hover effect =====
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('hovered'));
        card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
    });
});
