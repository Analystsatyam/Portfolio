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
    initBinaryRain();
    initDataFlowLines();
    initCounterAnimation();
    initPipelineNodes();
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
        'Pipeline Architect',
        'PySpark Expert',
        'AWS Specialist',
        'Spark Wizard',
        'ETL Craftsman'
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

// ===== Binary Rain Effect =====
function initBinaryRain() {
    const dataStream = document.getElementById('data-stream');
    if (!dataStream) return;

    // Create binary rain container
    const binaryRain = document.createElement('div');
    binaryRain.className = 'binary-rain';
    dataStream.appendChild(binaryRain);

    // Create multiple binary columns
    const columnCount = Math.floor(window.innerWidth / 60);

    for (let i = 0; i < columnCount; i++) {
        createBinaryColumn(binaryRain, i, columnCount);
    }
}

function createBinaryColumn(container, index, total) {
    const column = document.createElement('div');
    column.className = 'binary-column';

    // Generate random binary/data characters
    const chars = '01｛｝[]<>═║╔╗╚╝├┤┬┴┼━│';
    const length = Math.floor(Math.random() * 20) + 10;
    let text = '';
    for (let i = 0; i < length; i++) {
        text += chars[Math.floor(Math.random() * chars.length)];
    }
    column.textContent = text;

    // Position and timing
    const left = (index / total) * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 15 + 10;

    column.style.cssText = `
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        font-size: ${Math.random() * 6 + 10}px;
    `;

    container.appendChild(column);
}

// ===== Data Flow Lines =====
function initDataFlowLines() {
    const dataStream = document.getElementById('data-stream');
    if (!dataStream) return;

    // Create flowing data lines
    const lineCount = 5;

    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'data-flow-line';

        const top = Math.random() * 80 + 10;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        const width = Math.random() * 200 + 100;

        line.style.cssText = `
            top: ${top}%;
            width: ${width}px;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;

        dataStream.appendChild(line);
    }
}

// ===== Counter Animation =====
function initCounterAnimation() {
    const counters = document.querySelectorAll('.highlight-number[data-count]');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseFloat(element.dataset.count);
    const suffix = element.dataset.suffix || '';
    const isDecimal = element.dataset.decimal === 'true';
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = target * easeOutQuart;

        if (isDecimal) {
            element.textContent = current.toFixed(1) + suffix;
        } else {
            element.textContent = Math.floor(current) + suffix;
        }

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// ===== Pipeline Nodes Animation =====
function initPipelineNodes() {
    const dataStream = document.getElementById('data-stream');
    if (!dataStream) return;

    // Create pipeline connection nodes
    const nodeCount = 8;

    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'pipeline-node';

        const left = Math.random() * 80 + 10;
        const top = Math.random() * 80 + 10;
        const delay = Math.random() * 2;
        const scale = Math.random() * 0.5 + 0.5;

        node.style.cssText = `
            left: ${left}%;
            top: ${top}%;
            animation-delay: ${delay}s;
            transform: scale(${scale});
            opacity: ${0.3 + Math.random() * 0.3};
        `;

        dataStream.appendChild(node);
    }
}

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
%c ╔═══════════════════════════════════════════════════════════════╗
%c ║                                                               ║
%c ║   ███████╗ █████╗ ████████╗██╗   ██╗ █████╗ ███╗   ███╗      ║
%c ║   ██╔════╝██╔══██╗╚══██╔══╝╚██╗ ██╔╝██╔══██╗████╗ ████║      ║
%c ║   ███████╗███████║   ██║    ╚████╔╝ ███████║██╔████╔██║      ║
%c ║   ╚════██║██╔══██║   ██║     ╚██╔╝  ██╔══██║██║╚██╔╝██║      ║
%c ║   ███████║██║  ██║   ██║      ██║   ██║  ██║██║ ╚═╝ ██║      ║
%c ║   ╚══════╝╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝      ║
%c ║                                                               ║
%c ╠═══════════════════════════════════════════════════════════════╣
%c ║  🚀 Data Engineer | 3 Years Experience                       ║
%c ║  ⚡ 300M+ Rows Processed | 99.9%% Pipeline Reliability        ║
%c ║  🔧 PySpark • AWS Glue • Airflow • Kafka • Redshift          ║
%c ╚═══════════════════════════════════════════════════════════════╝
%c
%c  > Pipeline Status: OPERATIONAL ✓
%c  > Data Integrity: 99.9%% ✓
%c  > Welcome to my portfolio!
`,
'color: #3b82f6;',
'color: #3b82f6;',
'color: #06b6d4; font-weight: bold;',
'color: #06b6d4; font-weight: bold;',
'color: #06b6d4; font-weight: bold;',
'color: #06b6d4; font-weight: bold;',
'color: #06b6d4; font-weight: bold;',
'color: #06b6d4; font-weight: bold;',
'color: #3b82f6;',
'color: #3b82f6;',
'color: #10b981;',
'color: #10b981;',
'color: #10b981;',
'color: #3b82f6;',
'color: #6b7280;',
'color: #10b981;',
'color: #10b981;',
'color: #9ca3af;'
);

