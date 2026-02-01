/**
 * Satyam Kumar - Portfolio Website
 * Main JavaScript File
 * Handles animations, interactions, and dynamic content
 */

// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initSkillBars();
    initDataStream();
});

// ===== Navigation =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll handler for navbar background
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Typing Animation =====
function initTypingAnimation() {
    const typedElement = document.getElementById('typed-title');
    const titles = [
        'Data Engineer',
        'PySpark Expert',
        'AWS Specialist',
        'Pipeline Architect',
        'Cloud Engineer'
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            // Remove character
            typedElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            // Add character
            typedElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }

        // Check if word is complete
        if (!isDeleting && charIndex === currentTitle.length) {
            // Pause at end of word
            typingDelay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next word
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingDelay = 500;
        }

        setTimeout(type, typingDelay);
    }

    // Start typing animation
    setTimeout(type, 1000);
}

// ===== Scroll Animations (AOS-like) =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== Skill Bars Animation =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.dataset.progress;
                entry.target.style.width = `${progress}%`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ===== Data Stream Background Animation =====
function initDataStream() {
    const dataStream = document.getElementById('data-stream');
    if (!dataStream) return;

    // Create floating particles
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(dataStream);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random initial position
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    // Random size
    const size = Math.random() * 4 + 2;

    // Random animation duration
    const duration = Math.random() * 20 + 10;

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;

    particle.style.cssText = `
        position: absolute;
        left: ${startX}%;
        top: ${startY}%;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(135deg, rgba(59, 130, 246, ${opacity}), rgba(6, 182, 212, ${opacity}));
        border-radius: 50%;
        animation: floatParticle ${duration}s linear infinite;
        pointer-events: none;
    `;

    container.appendChild(particle);
}

// Add floating particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(50px) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Additional Utilities =====

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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== Form Validation (if contact form is added) =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== Lazy Loading for Images =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== Console Easter Egg =====
console.log(`
%c ____        _                         _  __
%c/ ___|  __ _| |_ _   _  __ _ _ __ ___ | |/ /   _ _ __ ___   __ _ _ __
%c\\___ \\ / _\` | __| | | |/ _\` | '_ \` _ \\| ' / | | | '_ \` _ \\ / _\` | '__|
%c ___) | (_| | |_| |_| | (_| | | | | | | . \\ |_| | | | | | | (_| | |
%c|____/ \\__,_|\\__|\\__, |\\__,_|_| |_| |_|_|\\_\\__,_|_| |_| |_|\\__,_|_|
%c                 |___/
%c
%cData Engineer | AWS | PySpark | Databricks
%c
%cWelcome to my portfolio! Feel free to explore.
%cBuilt with vanilla HTML, CSS, and JavaScript.
`,
'color: #3b82f6; font-weight: bold;',
'color: #3b82f6; font-weight: bold;',
'color: #06b6d4; font-weight: bold;',
'color: #06b6d4; font-weight: bold;',
'color: #10b981; font-weight: bold;',
'color: #10b981; font-weight: bold;',
'color: #6b7280;',
'color: #9ca3af; font-style: italic;',
'color: #6b7280;',
'color: #10b981;',
'color: #6b7280;'
);
