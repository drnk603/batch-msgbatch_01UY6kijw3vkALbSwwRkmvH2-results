(function() {
  'use strict';

  window.__app = window.__app || {};

  const debounce = function(func, wait) {
    let timeout;
    return function executedFunction() {
      const later = function() {
        clearTimeout(timeout);
        func();
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const throttle = function(func, limit) {
    let inThrottle;
    return function() {
      if (!inThrottle) {
        func.apply(this, arguments);
        inThrottle = true;
        setTimeout(function() { inThrottle = false; }, limit);
      }
    };
  };

  const initScrollAnimations = function() {
    if (window.__app.scrollAnimsInitialized) return;
    window.__app.scrollAnimsInitialized = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const animateElements = document.querySelectorAll('.c-card, .c-hero, .c-section-title, .c-button, img, .c-form-group, .hero-section');

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(30px)';
          
          requestAnimationFrame(function() {
            entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          });

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animateElements.forEach(function(el) {
      if (!el.hasAttribute('data-no-animate')) {
        observer.observe(el);
      }
    });
  };

  const initBurger = function() {
    if (window.__app.burgerInitialized) return;
    window.__app.burgerInitialized = true;

    const toggle = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.l-header');

    if (!toggle || !collapse) return;

    const headerHeight = header ? header.offsetHeight : 72;

    const closeMenu = function() {
      collapse.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('u-no-scroll');
      collapse.style.height = '';
    };

    const openMenu = function() {
      collapse.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('u-no-scroll');
      collapse.style.height = 'calc(100vh - ' + headerHeight + 'px)';
    };

    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      if (collapse.classList.contains('show')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && collapse.classList.contains('show')) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener('click', function(e) {
      if (collapse.classList.contains('show') && !collapse.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    const handleResize = throttle(function() {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    }, 250);

    window.addEventListener('resize', handleResize);
  };

  const initSmoothScroll = function() {
    if (window.__app.smoothScrollInitialized) return;
    window.__app.smoothScrollInitialized = true;

    const getHeaderHeight = function() {
      const header = document.querySelector('.l-header');
      return header ? header.offsetHeight : 72;
    };

    const handleAnchorClick = function(e) {
      const href = e.currentTarget.getAttribute('href');
      if (!href || href === '#' || href === '#!' || !href.startsWith('#')) return;

      e.preventDefault();
      const sectionId = href.substring(1);
      const targetElement = document.getElementById(sectionId);

      if (!targetElement) return;

      const headerHeight = getHeaderHeight();
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', handleAnchorClick);
    });
  };

  const initScrollSpy = function() {
    if (window.__app.scrollSpyInitialized) return;
    window.__app.scrollSpyInitialized = true;

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function(link) {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function(section) {
      observer.observe(section);
    });
  };

  const initRippleEffect = function() {
    if (window.__app.rippleInitialized) return;
    window.__app.rippleInitialized = true;

    const elements = document.querySelectorAll('.c-button, .c-card, .nav-link');

    elements.forEach(function(el) {
      el.style.position = 'relative';
      el.style.overflow = 'hidden';

      el.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';

        const computedStyle = window.getComputedStyle(el);
        const bgColor = computedStyle.backgroundColor;
        const textColor = computedStyle.color;
        
        const isLightBg = bgColor.includes('255, 255, 255') || bgColor.includes('250, 250') || bgColor.includes('245, 245');
        ripple.style.backgroundColor = isLightBg ? 'rgba(0, 102, 255, 0.3)' : 'rgba(255, 255, 255, 0.5)';

        el.appendChild(ripple);

        setTimeout(function() {
          ripple.remove();
        }, 600);
      });
    });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const initCountUp = function() {
    if (window.__app.countUpInitialized) return;
    window.__app.countUpInitialized = true;

    const counters = document.querySelectorAll('[data-count]');
    if (counters.length === 0) return;

    const animateCounter = function(el) {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const duration = 2000;
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const updateCounter = function() {
        current += increment;
        if (current < target) {
          el.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target;
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(counter) {
      observer.observe(counter);
    });
  };

  const initScrollToTop = function() {
    if (window.__app.scrollTopInitialized) return;
    window.__app.scrollTopInitialized = true;

    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top-btn';
    button.setAttribute('aria-label', 'Scroll to top');
    button.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--color-primary);
      color: var(--color-neutral-0);
      border: none;
      font-size: 24px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
      z-index: 1000;
      box-shadow: var(--shadow-lg);
    `;

    document.body.appendChild(button);

    const toggleButton = throttle(function() {
      if (window.pageYOffset > 300) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      } else {
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
      }
    }, 100);

    window.addEventListener('scroll', toggleButton);

    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    button.addEventListener('mouseenter', function() {
      button.style.transform = 'scale(1.1)';
      button.style.backgroundColor = 'var(--color-primary-dark)';
    });

    button.addEventListener('mouseleave', function() {
      button.style.transform = 'scale(1)';
      button.style.backgroundColor = 'var(--color-primary)';
    });
  };

  const initFormValidation = function() {
    if (window.__app.formValidationInitialized) return;
    window.__app.formValidationInitialized = true;

    const forms = document.querySelectorAll('form');

    const patterns = {
      name: /^[a-zA-ZÀ-ÿs-']{2,50}$/,
      email: /^[^s@]+@[^s@]+.[^s@]+$/,
      phone: /^[ds+-()]{10,20}$/,
      message: /^.{10,}$/
    };

    const messages = {
      name: 'Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes',
      email: 'Please enter a valid email address (example: user@domain.com)',
      phone: 'Phone number must be 10-20 characters and can include digits, spaces, +, -, ( )',
      message: 'Message must be at least 10 characters long',
      required: 'This field is required',
      generic: 'Please check this field'
    };

    const escapeHtml = function(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    };

    const showError = function(input, message) {
      const formGroup = input.closest('.c-form-group');
      if (!formGroup) return;

      let errorEl = formGroup.querySelector('.c-form-error');
      if (!errorEl) {
        errorEl = document.createElement('span');
        errorEl.className = 'c-form-error';
        errorEl.setAttribute('role', 'alert');
        input.parentNode.appendChild(errorEl);
      }

      errorEl.textContent = message;
      errorEl.style.display = 'block';
      input.setAttribute('aria-invalid', 'true');
      input.style.borderColor = 'var(--color-error)';
    };

    const clearError = function(input) {
      const formGroup = input.closest('.c-form-group');
      if (!formGroup) return;

      const errorEl = formGroup.querySelector('.c-form-error');
      if (errorEl) {
        errorEl.style.display = 'none';
        errorEl.textContent = '';
      }

      input.removeAttribute('aria-invalid');
      input.style.borderColor = '';
    };

    const validateField = function(input) {
      const value = input.value.trim();
      const name = input.name.toLowerCase();
      const type = input.type.toLowerCase();

      clearError(input);

      if (input.hasAttribute('required') && !value) {
        showError(input, messages.required);
        return false;
      }

      if (!value) return true;

      if (name.includes('name') || input.id.includes('name')) {
        if (!patterns.name.test(value)) {
          showError(input, messages.name);
          return false;
        }
      }

      if (type === 'email' || name.includes('email') || input.id.includes('email')) {
        if (!patterns.email.test(value)) {
          showError(input, messages.email);
          return false;
        }
      }

      if (name.includes('phone') || input.id.includes('phone') || name.includes('tel')) {
        if (!patterns.phone.test(value)) {
          showError(input, messages.phone);
          return false;
        }
      }

      if (name.includes('message') || input.tagName.toLowerCase() === 'textarea') {
        if (!patterns.message.test(value)) {
          showError(input, messages.message);
          return false;
        }
      }

      return true;
    };

    forms.forEach(function(form) {
      if (form.classList.contains('validated-form')) return;
      form.classList.add('validated-form');

      const inputs = form.querySelectorAll('input:not([type="submit"]):not([type="hidden"]):not([type="checkbox"]), textarea');

      inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
          validateField(input);
        });

        input.addEventListener('input', function() {
          if (input.hasAttribute('aria-invalid')) {
            validateField(input);
          }
        });
      });

      form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        const formData = {};

        inputs.forEach(function(input) {
          if (!validateField(input)) {
            isValid = false;
          }
          formData[input.name] = escapeHtml(input.value.trim());
        });

        if (!isValid) {
          const firstInvalid = form.querySelector('[aria-invalid="true"]');
          if (firstInvalid) {
            firstInvalid.focus();
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return;
        }

        handleFormSubmit(form, formData);
      });
    });
  };

  const handleFormSubmit = function(form, formData) {
    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
    if (!submitBtn) return;

    const originalText = submitBtn.textContent || submitBtn.value;
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'wait';

    if (submitBtn.tagName === 'BUTTON') {
      submitBtn.innerHTML = '<span style="display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spinner 0.6s linear infinite;margin-right:8px;"></span>Sending...';
    }

    const style = document.createElement('style');
    style.textContent = '@keyframes spinner { to { transform: rotate(360deg); } }';
    document.head.appendChild(style);

    const isOnline = navigator.onLine;
    if (!isOnline) {
      window.__app.notify('No internet connection. Please check your network and try again.', 'error');
      submitBtn.disabled = false;
      submitBtn.style.cursor = '';
      if (submitBtn.tagName === 'BUTTON') {
        submitBtn.textContent = originalText;
      }
      return;
    }

    setTimeout(function() {
      if (form.action && form.action.includes('thank_you.html')) {
        window.location.href = 'thank_you.html';
        return;
      }

      const endpoint = form.action || 'process.php';

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(result) {
        if (result.success) {
          window.__app.notify('Message sent successfully!', 'success');
          form.reset();
          
          const inputs = form.querySelectorAll('input, textarea');
          inputs.forEach(function(input) {
            input.style.borderColor = '';
          });

          setTimeout(function() {
            window.location.href = 'thank_you.html';
          }, 1500);
        } else {
          window.__app.notify(result.message || 'An error occurred. Please try again.', 'error');
        }
      })
      .catch(function(error) {
        window.__app.notify('Connection error. Please try again later.', 'error');
        console.error('Form submission error:', error);
      })
      .finally(function() {
        submitBtn.disabled = false;
        submitBtn.style.cursor = '';
        if (submitBtn.tagName === 'BUTTON') {
          submitBtn.textContent = originalText;
        }
      });
    }, 800);
  };

  window.__app.notify = function(message, type) {
    type = type || 'info';

    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;
      `;
      container.setAttribute('role', 'region');
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }

    const colors = {
      success: { bg: '#34C759', text: '#ffffff' },
      error: { bg: '#FF3B30', text: '#ffffff' },
      warning: { bg: '#FF9500', text: '#ffffff' },
      info: { bg: '#007AFF', text: '#ffffff' }
    };

    const color = colors[type] || colors.info;

    const toast = document.createElement('div');
    toast.style.cssText = `
      background-color: ${color.bg};
      color: ${color.text};
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      min-width: 300px;
      animation: slideIn 0.3s ease-out;
      font-size: 16px;
      font-weight: 500;
    `;

    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;
    toast.appendChild(messageSpan);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
      background: none;
      border: none;
      color: ${color.text};
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      transition: opacity 0.2s;
    `;
    closeBtn.setAttribute('aria-label', 'Close notification');
    closeBtn.addEventListener('mouseenter', function() {
      closeBtn.style.opacity = '1';
    });
    closeBtn.addEventListener('mouseleave', function() {
      closeBtn.style.opacity = '0.8';
    });
    closeBtn.addEventListener('click', function() {
      toast.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(function() {
        toast.remove();
      }, 300);
    });

    toast.appendChild(closeBtn);
    container.appendChild(toast);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    if (!document.querySelector('style[data-toast-animations]')) {
      style.setAttribute('data-toast-animations', 'true');
      document.head.appendChild(style);
    }

    setTimeout(function() {
      toast.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(function() {
        toast.remove();
      }, 300);
    }, 5000);
  };

  const initImages = function() {
    if (window.__app.imagesInitialized) return;
    window.__app.imagesInitialized = true;

    const images = document.querySelectorAll('img');

    images.forEach(function(img) {
      if (!img.hasAttribute('loading') && !img.classList.contains('c-logo__img')) {
        img.setAttribute('loading', 'lazy');
      }

      if (!img.classList.contains('img-fluid')) {
        img.classList.add('img-fluid');
      }

      img.addEventListener('error', function() {
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e9ecef" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%236c757d" font-size="14"%3EImage not found%3C/text%3E%3C/svg%3E';
        img.style.objectFit = 'contain';
      });
    });
  };

  const initButtonAnimations = function() {
    if (window.__app.buttonAnimsInitialized) return;
    window.__app.buttonAnimsInitialized = true;

    const buttons = document.querySelectorAll('.c-button');

    buttons.forEach(function(btn) {
      btn.addEventListener('mouseenter', function() {
        btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      });

      btn.addEventListener('mouseleave', function() {
        btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      });
    });
  };

  const initCardHoverEffects = function() {
    if (window.__app.cardHoverInitialized) return;
    window.__app.cardHoverInitialized = true;

    const cards = document.querySelectorAll('.c-card');

    cards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      });

      card.addEventListener('mouseleave', function() {
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      });
    });
  };

  window.__app.init = function() {
    initScrollAnimations();
    initBurger();
    initSmoothScroll();
    initScrollSpy();
    initRippleEffect();
    initCountUp();
    initScrollToTop();
    initFormValidation();
    initImages();
    initButtonAnimations();
    initCardHoverEffects();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      window.__app.init();
    });
  } else {
    window.__app.init();
  }
})();
