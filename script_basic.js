// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Text Reveal Animation
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
      gsap.from(line, {
        y: '100%',
        duration: 1.2,
        delay: index * 0.15,
        ease: 'power3.out'
      });
    });
  
// 2. Smooth Scrolling - Alternative Dramatic Version
const scrollerItems = document.querySelectorAll('.scroller__item');
const itemHeight = 100; // Height in vh units for each item

// Set initial states
gsap.set(scrollerItems, { y: 100 });

// Create a timeline for the scroll effect
const scrollerTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.scroller',
    start: 'top top',
    end: `+=${(scrollerItems.length - 1) * 100}%`,
    scrub: true,
    pin: true
  }
});

// Add animations for each item
scrollerItems.forEach((item, i) => {
  // First item stays at top
  if (i === 0) {
    scrollerTL.to(item, { 
      y: 0,
      opacity: 1
    }, 0);
  } 
  // Subsequent items push previous ones up
  else {
    scrollerTL.to(scrollerItems[i-1], {
      y: `-=${itemHeight}`,
      opacity: 0.7
    }, i * 0.3);
    
    scrollerTL.to(item, {
      y: 0,
      opacity: 1
    }, i * 0.3);
  }
});
  
    // 3. Cursor Trailer (Basic Agency style)
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
  });

  // Project Image Reveal
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

  // Remove loader when page loads
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