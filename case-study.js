document.addEventListener('DOMContentLoaded', () => {
    // Animate case study header
    gsap.from('.case-header__title .line', {
      y: '100%',
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.5
    });
  
    // Animate meta items
    gsap.from('.case-meta__item', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 1,
      scrollTrigger: {
        trigger: '.case-header',
        start: 'top bottom'
      }
    });
  
    // Parallax hero image
    gsap.to('.case-hero__image', {
      y: '20%',
      scrollTrigger: {
        trigger: '.case-hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  
    // Section animations
    gsap.utils.toArray('.case-section').forEach((section, i) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
  
    // Process item animations
    gsap.utils.toArray('.case-process__item').forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: '.case-process',
          start: 'top 70%'
        }
      });
    });
  
    // Gallery animations
    gsap.utils.toArray('.case-gallery__item').forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'expo.out',
        delay: i * 0.15,
        scrollTrigger: {
          trigger: '.case-gallery',
          start: 'top 80%'
        }
      });
    });
  
    // Next project CTA animation
    gsap.from('.case-cta', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.case-cta',
        start: 'top 80%'
      }
    });
  });