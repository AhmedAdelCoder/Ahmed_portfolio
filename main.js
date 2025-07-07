    // Typing animation for hero title
    const typingEl = document.getElementById('typing');
    const titles = ['Full Stack Developer', 'Problem Solver', 'Backend Enthusiast'];
    let titleIdx = 0, charIdx = 0, typing = true;
    function typeTitle() {
      if (typing) {
        if (charIdx < titles[titleIdx].length) {
          typingEl.textContent += titles[titleIdx][charIdx++];
          setTimeout(typeTitle, 70);
        } else {
          typing = false;
          setTimeout(typeTitle, 1200);
        }
      } else {
        if (charIdx > 0) {
          typingEl.textContent = titles[titleIdx].slice(0, --charIdx);
          setTimeout(typeTitle, 35);
        } else {
          typing = true;
          titleIdx = (titleIdx + 1) % titles.length;
          setTimeout(typeTitle, 400);
        }
      }
    }
    typeTitle();

    // Smooth scroll for scroll-down arrow
    document.getElementById('scrollDown').addEventListener('click', () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('scrollDown').addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Fade-in sections and animate skills/knowledge on scroll
    function revealOnScroll() {
      const reveals = document.querySelectorAll('section:not(.hero)');
      const windowHeight = window.innerHeight;
      reveals.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
          sec.classList.add('visible');
        }
      });
      // Skills cards entrance
      const skills = document.querySelectorAll('.skill-card');
      skills.forEach((el, i) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
          setTimeout(() => el.classList.add('visible'), i * 60);
        }
      });
      // Knowledge cards entrance
      const know = document.querySelectorAll('.knowledge-card');
      know.forEach((el, i) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
          setTimeout(() => el.classList.add('visible'), i * 120);
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Active nav highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['hero','about','skills','knowledge','contact'].map(id => document.getElementById(id));
    function highlightNav() {
      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (window.scrollY + 80 >= sections[i].offsetTop) idx = i;
      }
      navLinks.forEach((l, i) => l.classList.toggle('active', i === idx));
    }
    window.addEventListener('scroll', highlightNav);
    window.addEventListener('load', highlightNav);
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('data-section'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Contact form (dummy, no backend)
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      formSuccess.style.display = 'block';
      setTimeout(() => { formSuccess.style.display = 'none'; contactForm.reset(); }, 2200);
    });