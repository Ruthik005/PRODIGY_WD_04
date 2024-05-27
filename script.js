// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero-image');
    if (parallax) {
        let scrollPosition = window.pageYOffset;
        parallax.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
    }
});

// Intersection Observer for Animations
const animateElements = document.querySelectorAll('.animate__animated');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
        } else {
            entry.target.classList.remove('animate__animated');
        }
    });
});

animateElements.forEach((el) => observer.observe(el));
