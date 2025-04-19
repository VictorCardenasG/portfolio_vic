// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Text Reveal Animation
  const lines = document.querySelectorAll('.line');
  lines.forEach((line, index) => {
    gsap.from(line, {
      y: '60%',
      duration: 1.2,
      delay: index * 0.15,
      ease: 'power3.out'
    });
  });

  // 2. Optimized Smooth Scrolling
  const scrollerItems = document.querySelectorAll('.scroller__item');
  
  // Set initial states
  gsap.set(scrollerItems, { 
    y: 100,
    opacity: 0 
  });
  
  // Create smoother animation timeline
  scrollerItems.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top center",
      end: "+=200", // Shorter scroll distance
      scrub: 0.5, // Smoother scrubbing
      onEnter: () => {
        gsap.to(item, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        });
        
        // Fade out previous item if it exists
        if (i > 0) {
          gsap.to(scrollerItems[i-1], {
            opacity: 0.3,
            duration: 0.5
          });
        }
      },
      onLeaveBack: () => {
        gsap.to(item, {
          y: 100,
          opacity: 0,
          duration: 0.5
        });
      }
    });
  });

  // 3. Cursor Trailer
  const trailer = document.createElement('div');
  trailer.classList.add('cursor-trailer');
  document.body.appendChild(trailer);

  document.addEventListener('mousemove', e => {
    gsap.to(trailer, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.8,
      ease: 'power2.out'
    });
  });
  
  // 4. Project Image Reveal
  gsap.utils.toArray(".project").forEach((project, i) => {
    gsap.from(project, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: project,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
    
    // Hover effect enhancement
    project.addEventListener("mouseenter", () => {
      gsap.to(project.querySelector(".project__info"), {
        opacity: 1,
        y: 0,
        duration: 0.6
      });
    });
    
    project.addEventListener("mouseleave", () => {
      gsap.to(project.querySelector(".project__info"), {
        opacity: 0,
        y: 10,
        duration: 0.3
      });
    });
  });
  
  // 5. Remove loader when page loads
  window.addEventListener("load", () => {
    gsap.to(".loader", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        document.body.removeChild(document.querySelector(".loader"));
      }
    });
  });
  
  // 6. Horizontal Scroll for Projects
  const projectsSection = document.querySelector('.projects');
  if (projectsSection) {
    projectsSection.style.scrollBehavior = 'smooth';
    projectsSection.style.scrollSnapType = 'x mandatory';
    projectsSection.style.scrollbarWidth = 'none';
    projectsSection.style.msOverflowStyle = 'none';
  }
  
  // Navigation arrows functionality
  const prevBtn = document.querySelector('.projects-nav__prev');
  const nextBtn = document.querySelector('.projects-nav__next');
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      projectsSection.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
      projectsSection.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
});