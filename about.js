document.addEventListener('DOMContentLoaded', () => {
    // Animate hero title
    gsap.from('.about-hero__title .line', {
      y: '100%',
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.5
    });
  
    // Animate hero image
    gsap.from('.about-hero__image', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'expo.out',
      delay: 1,
      scrollTrigger: {
        trigger: '.about-hero',
        start: 'top bottom'
      }
    });
  
    // Parallax hero image
    gsap.to('.about-hero__image img', {
      y: '15%',
      scrollTrigger: {
        trigger: '.about-hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  
    // Animate intro section
    gsap.from('.about-intro__title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.about-intro',
        start: 'top 80%'
      }
    });
  
    gsap.from('.about-intro__text', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'expo.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: '.about-intro',
        start: 'top 80%'
      }
    });
  
    // Animate bio items
    gsap.utils.toArray('.about-bio__item').forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: '.about-bio',
          start: 'top 70%'
        }
      });
    });
  
    // Animate skills
    gsap.utils.toArray('.about-skill').forEach((skill, i) => {
      gsap.from(skill, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: '.about-skills',
          start: 'top 70%'
        }
      });
    });
  
    // Animate tools
    gsap.from('.about-tools__list span', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-tools',
        start: 'top 80%'
      }
    });
  
    // Animate experience
    gsap.utils.toArray('.experience-item').forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        delay: i * 0.15,
        scrollTrigger: {
          trigger: '.about-experience',
          start: 'top 80%'
        }
      });
    });
  
    // Animate CTA
    gsap.from('.about-cta', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.about-cta',
        start: 'top 80%'
      }
    });
  });