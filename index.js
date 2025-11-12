// Scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.hero, .skills, .projects').forEach(el => {
      observer.observe(el);
    });

    // Scroll to top
    function scrollToTop() {
      window.scrollTo({ top:0, behavior:'smooth' });
    }