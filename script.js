// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Initialize page animations
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded'); // Debug log
  
  // SMOOTH: Add fade-up animation WITHOUT race condition
  const heroContent = document.querySelector('.hero-content');
  const heroTitle = document.querySelector('.hero-title');
  
  if (heroContent && heroTitle) {
    console.log('Hero elements found'); // Debug log
    
    // Store the original text before any animations
    const originalText = heroTitle.textContent;
    
    // Step 1: Start the fade-up animation
    heroContent.classList.add('fade-in');
    
    // Step 2: Wait for fade-up to complete, THEN start typewriter
    setTimeout(() => {
      console.log('Starting typewriter effect after fade-up'); // Debug log
      
      if (originalText && originalText.length > 0) {
        heroTitle.textContent = ''; // Clear text AFTER fade-up is done
        let i = 0;
        
        function typeWriter() {
          if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Nice typing speed
          } else {
            console.log('Typewriter effect completed'); // Debug log
          }
        }
        
        // Start typing
        typeWriter();
      }
    }, 1000); // Wait for CSS animation to complete (1s)
    
  } else {
    console.log('Hero elements NOT found'); // Debug log
  }

  // Add scroll-based animations for project cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe project cards for scroll animations
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe experience cards
  const experienceCards = document.querySelectorAll('.experience-list .card');
  experienceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(card);
  });

  // Add navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavigation() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('onclick').includes(current)) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation);

  // Add bounce animation to arrow
  const arrow = document.querySelector('.arrow-down');
  if (arrow) {
    setInterval(() => {
      arrow.style.animation = 'none';
      setTimeout(() => {
        arrow.style.animation = 'bounce 2s infinite';
      }, 10);
    }, 4000);
  }

  // Add hover effects to project cards
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) translateY(0)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
    });
  });
});

// Add active state styles
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    color: #a78bfa !important;
    font-weight: 600;
  }
  
  .project-card {
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
