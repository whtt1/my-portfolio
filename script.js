const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav a');

function handleScrollSpy() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) a.classList.add('active');
    });
}
window.addEventListener('scroll', handleScrollSpy);

const progressBars = document.querySelectorAll('.progress');
function animateProgress() {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-skill');
        const position = bar.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 50) bar.style.width = value + '%';
    });
}
window.addEventListener('scroll', animateProgress);

const observerOptions = { threshold: 0.3 };
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

sections.forEach((section, index) => {
    section.classList.add(index % 2 === 0 ? 'from-left' : 'from-right');
    sectionObserver.observe(section);
});

const stackCards = document.querySelectorAll('.stack-card');
const stackObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, idx * 150);
        }
    });
}, { threshold: 0.3 });

stackCards.forEach(card => stackObserver.observe(card));

const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, idx * 150);
        }
    });
}, { threshold: 0.3 });

projectCards.forEach(card => projectObserver.observe(card));