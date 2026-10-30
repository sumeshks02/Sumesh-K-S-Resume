/**
 * Sumesh K S - Web Developer Portfolio
 * Dedicated JavaScript: Interactive Behaviors, UI Controls & Animations
 */

// Configure Tailwind if Tailwind CDN is present on window
if (typeof window !== 'undefined') {
  window.tailwind = window.tailwind || {};
  window.tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          secondary: '#7bd0ff',
          error: '#ffb4ab',
          'on-primary-fixed-variant': '#2f2ebe',
          'surface-tint': '#c0c1ff',
          'glow-cyan': 'rgba(56, 189, 248, 0.20)',
          'surface-container-high': '#262a35',
          'primary-container': '#8083ff',
          'on-error-container': '#ffdad6',
          outline: '#908fa0',
          'border-active': 'rgba(56, 189, 248, 0.35)',
          'inverse-on-surface': '#2c303b',
          'on-primary': '#1000a9',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          'on-tertiary-container': '#002f35',
          'outline-variant': '#464554',
          'surface-charcoal': '#111827',
          'accent-cyan-soft': '#BDE1EC',
          'secondary-fixed': '#c4e7ff',
          'on-error': '#690005',
          primary: '#c0c1ff',
          'on-background': '#dfe2f1',
          'surface-bright': '#353944',
          'inverse-primary': '#494bd6',
          'tertiary-fixed-dim': '#6fd5e6',
          'on-tertiary-fixed': '#001f24',
          'on-secondary-fixed': '#001e2c',
          'inverse-surface': '#dfe2f1',
          'on-secondary-container': '#00374d',
          'surface-container': '#1c1f2a',
          'primary-fixed': '#e1e0ff',
          'tertiary-container': '#2d9eae',
          'on-secondary': '#00354a',
          surface: '#0f131d',
          'on-secondary-fixed-variant': '#004c69',
          'tertiary-fixed': '#9bf0ff',
          'on-tertiary-fixed-variant': '#004f58',
          'surface-container-lowest': '#0a0e18',
          'error-container': '#93000a',
          tertiary: '#6fd5e6',
          'on-primary-container': '#0d0096',
          'on-surface-variant': '#c7c4d7',
          background: '#0f131d',
          'surface-variant': '#313540',
          'on-tertiary': '#00363d',
          'surface-container-low': '#171b26',
          'primary-fixed-dim': '#c0c1ff',
          'surface-dim': '#0f131d',
          'surface-glass': 'rgba(17, 24, 39, 0.75)',
          'secondary-container': '#00a6e0',
          'glow-indigo': 'rgba(99, 102, 241, 0.15)',
          'surface-container-highest': '#313540',
          'on-primary-fixed': '#07006c',
          'secondary-fixed-dim': '#7bd0ff',
          'on-surface': '#dfe2f1'
        },
        borderRadius: {
          DEFAULT: '0.25rem',
          lg: '0.5rem',
          xl: '0.75rem',
          full: '9999px'
        },
        spacing: {
          margin: '4rem',
          'space-lg': '1.5rem',
          'space-xs': '0.25rem',
          'space-xl': '2.5rem',
          'space-sm': '0.5rem',
          'gutter-mobile': '1rem',
          'space-md': '1rem',
          'margin-mobile': '1.25rem',
          gutter: '1.5rem'
        },
        fontFamily: {
          'body-lg': ['Plus Jakarta Sans', 'sans-serif'],
          'label-caps': ['JetBrains Mono', 'monospace'],
          'headline-lg-mobile': ['Plus Jakarta Sans', 'sans-serif'],
          'label-code': ['JetBrains Mono', 'monospace'],
          'display-hero': ['JetBrains Mono'],
          'headline-lg': ['Plus Jakarta Sans', 'sans-serif'],
          'headline-md': ['Plus Jakarta Sans', 'sans-serif'],
          'headline-sm': ['Plus Jakarta Sans', 'sans-serif'],
          'display-hero-mobile': ['Fira Code'],
          'body-md': ['Plus Jakarta Sans', 'sans-serif'],
          'body-sm': ['Plus Jakarta Sans', 'sans-serif']
        },
        fontSize: {
          'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.005em', fontWeight: '400' }],
          'label-caps': ['11px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '600' }],
          'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em', fontWeight: '700' }],
          'label-code': ['13px', { lineHeight: '18px', letterSpacing: '0.02em', fontWeight: '500' }],
          'display-hero': ['56px', { lineHeight: '64px', letterSpacing: '-0.03em', fontWeight: '800' }],
          'headline-lg': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }],
          'headline-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.015em', fontWeight: '600' }],
          'headline-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '600' }],
          'display-hero-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.025em', fontWeight: '800' }],
          'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
          'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }]
        }
      }
    }
  };
}

/**
 * Main Initialization Routine
 */
function initPortfolioApp() {
  initScrollProgressBar();
  initTerminalTyping();
  initCopyEmail();
  initContactForm();
  initScrollSpy();
  initSmoothScroll();
  initMobileMenu();
  initSkillBars();
}

// Execute when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioApp);
} else {
  initPortfolioApp();
}

/**
 * Toast Notification System
 * Non-blocking modern UI notification for clipboard actions & form feedback
 */
export function showToast(title, message = '', icon = 'check_circle', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-surface-charcoal/95 border border-border-active shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl text-on-surface transform transition-all duration-300 translate-y-3 opacity-0 max-w-sm w-full';

  toast.innerHTML = `
    <span class="material-symbols-outlined text-tertiary text-2xl flex-shrink-0 mt-0.5">${icon}</span>
    <div class="flex flex-col flex-1 min-w-0">
      <span class="font-headline-sm text-sm font-semibold text-on-surface">${title}</span>
      ${message ? `<span class="font-body-sm text-xs text-on-surface-variant mt-0.5">${message}</span>` : ''}
    </div>
    <button type="button" aria-label="Close notification" class="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-lg">
      <span class="material-symbols-outlined text-base">close</span>
    </button>
  `;

  const closeBtn = toast.querySelector('button');
  const dismiss = () => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', dismiss);
  }

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.remove('opacity-0', 'translate-y-3');
  });

  // Auto dismiss
  setTimeout(() => {
    if (toast.parentElement) dismiss();
  }, duration);
}

/**
 * Typing Effect for Terminal Window Mockup
 */
function initTerminalTyping() {
  const targetEl = document.getElementById('terminal-typed-text');
  if (!targetEl) return;

  const commands = [
    'portfolio.initialize()',
    'npm run dev',
    'git commit -m "feat: ready"',
    'node server.js --port=3000',
    'deploy --target=production'
  ];

  let cmdIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;

  function typeTick() {
    const currentCmd = commands[cmdIndex];

    if (!isDeleting) {
      targetEl.textContent = currentCmd.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentCmd.length) {
        isDeleting = true;
        setTimeout(typeTick, 2200); // pause at end of text
        return;
      }
    } else {
      targetEl.textContent = currentCmd.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        cmdIndex = (cmdIndex + 1) % commands.length;
        setTimeout(typeTick, 400); // pause before starting next text
        return;
      }
    }

    const currentSpeed = isDeleting ? 40 : typingSpeed;
    setTimeout(typeTick, currentSpeed);
  }

  typeTick();
}

/**
 * Copy Email to Clipboard with custom Toast notification
 */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const email = 'sumeshks02@gmail.com';

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback method
          const textArea = document.createElement('textarea');
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast('Email Copied!', email, 'content_copy');
      } catch (err) {
        showToast('Direct Email', email, 'mail');
      }
    });
  });
}

/**
 * Interactive Contact Form Handling
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : '';

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
        <span>Sending Message...</span>
      `;
    }

    setTimeout(() => {
      // Restore submit button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      // Show in-page feedback alert
      if (feedback) {
        feedback.classList.remove('hidden');
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Show toast
      showToast('Message Received!', 'Thank you! Sumesh will reach out to you shortly.', 'send');

      // Reset form fields
      form.reset();

      // Hide feedback banner after 8 seconds
      setTimeout(() => {
        if (feedback) feedback.classList.add('hidden');
      }, 8000);
    }, 850);
  });
}

/**
 * Scroll Spy for active navigation links
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"], #mobile-nav a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  function updateActiveNav() {
    const scrollY = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${sectionId}`) {
            link.classList.add('bg-surface-container-high', 'text-on-surface', 'font-semibold');
            link.classList.remove('text-on-surface-variant');
          } else {
            link.classList.remove('bg-surface-container-high', 'text-on-surface', 'font-semibold');
            link.classList.add('text-on-surface-variant');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}

/**
 * Smooth scrolling for navigation links with offset
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          const menuIcon = document.getElementById('menu-icon');
          if (menuIcon) menuIcon.textContent = 'menu';
        }
      }
    });
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (menuIcon) menuIcon.textContent = 'close';
    } else {
      mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.textContent = 'menu';
    }
  });
}

/**
 * Skill Progress Bars Animation on Viewport Entry
 */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-progress-bar');
  if (!bars.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const percent = bar.getAttribute('data-percent') || '0%';
            bar.style.width = percent;
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.15 }
    );

    bars.forEach((bar) => {
      bar.style.width = '0%';
      observer.observe(bar);
    });
  } else {
    // Fallback if no IntersectionObserver
    bars.forEach((bar) => {
      bar.style.width = bar.getAttribute('data-percent') || '75%';
    });
  }
}

/**
 * Thin Animated Scroll-to-Top Progress Bar
 * Runs along the top, tracks scroll percentage with GPU acceleration,
 * and scrolls smoothly to top on click.
 */
function initScrollProgressBar() {
  const progressContainer = document.getElementById('scroll-progress-container');
  const progressBar = document.getElementById('scroll-progress-bar');
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

  if (!progressBar && !progressContainer) return;

  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;

    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }

    if (progressContainer) {
      const percentage = Math.round(progress * 100);
      progressContainer.setAttribute('aria-valuenow', percentage.toString());
      progressContainer.title = `Scroll progress: ${percentage}% - Click to return to top`;
    }

    // Toggle complementary floating action button
    if (scrollToTopBtn) {
      if (scrollTop > 320) {
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
        scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      } else {
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
        scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      }
    }
  }

  // Smooth scroll to top function
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Click on top progress bar to scroll to top
  if (progressContainer) {
    progressContainer.addEventListener('click', scrollToTop);
  }

  // Click on floating button to scroll to top
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', scrollToTop);
  }

  // High performance RAF throttle on window scroll
  let isTicking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          isTicking = false;
        });
        isTicking = true;
      }
    },
    { passive: true }
  );

  // Recalculate on window resize
  window.addEventListener(
    'resize',
    () => {
      window.requestAnimationFrame(updateScrollProgress);
    },
    { passive: true }
  );

  // Initial calculation on page load
  updateScrollProgress();
}
