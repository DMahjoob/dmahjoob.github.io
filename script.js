// Hamburger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        // Add your menu functionality here
        console.log('Menu toggled');
    });
});

// Smooth scroll for anchor links (if you add navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
