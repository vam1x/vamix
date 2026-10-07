import React, { useState, useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';
import RollingText from './RollingText';
import VamixLogo from './VamixLogo';

export default function Header({ isDrawerOpen, setIsDrawerOpen, currentRoute, navigate }) {
  const lenis = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoOverDark, setIsLogoOverDark] = useState(false);
  const [isMenuOverDark, setIsMenuOverDark] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    if (lenis) {
      window.__vamixLenis = lenis;
    }
  }, [lenis]);

  useEffect(() => {
    let ticking = false;

    const isPointDark = (x, y) => {
      // 1. Direct hit-test against floating dark panels:
      // a) Hero material art panel (#0b0b0b / #151515 / #181818)
      const heroPanel = document.querySelector('.hero-art-panel');
      if (heroPanel) {
        const rect = heroPanel.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return true;
        }
      }

      // b) Case section dark quote card (#171717 / #181818)
      const quotePanel = document.querySelector('.case-section__quote');
      if (quotePanel) {
        const rect = quotePanel.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return true;
        }
      }

      // c) Black footer banner (#0e0e0e / #151515 / #181818)
      const footerDark = document.querySelector('.footer-bottom-black, .site-footer');
      if (footerDark) {
        const rect = footerDark.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return true;
        }
      }

      // 2. Hide site-header and any menu overlays temporarily so document.elementFromPoint can sample the section underneath
      const headerEl = headerRef.current;
      const prevVisibility = headerEl ? headerEl.style.visibility : '';
      if (headerEl) headerEl.style.visibility = 'hidden';

      const drawerEls = document.querySelectorAll('.menu-shell-container, .nav-drawer-backdrop, .nav-drawer-card');
      const prevDrawerDisplays = [];
      drawerEls.forEach(el => {
        prevDrawerDisplays.push(el.style.display);
        el.style.display = 'none';
      });

      const targetEl = document.elementFromPoint(x, y);

      drawerEls.forEach((el, idx) => {
        el.style.display = prevDrawerDisplays[idx];
      });
      if (headerEl) headerEl.style.visibility = prevVisibility;

      if (!targetEl) return false;

      // 3. Walk up the DOM to verify section or computed background color
      let curr = targetEl;
      while (curr && curr !== document.body && curr !== document.documentElement) {
        // Explicit dark section checks
        if (
          curr.classList.contains('company-section') ||
          curr.classList.contains('section-dark') ||
          curr.classList.contains('hero-dark-theme') ||
          curr.classList.contains('services-block') ||
          curr.classList.contains('footer-bottom-black') ||
          curr.id === 'approach' ||
          curr.getAttribute('data-theme') === 'dark'
        ) {
          return true;
        }

        // Explicit light section checks (Why Us, Process, Contact, FAQ, Projects, Beliefs, Services, Case Studies, Legal, etc.)
        if (
          curr.classList.contains('advantages-section') ||
          curr.classList.contains('process-section') ||
          curr.classList.contains('case-section__copy') ||
          curr.classList.contains('more-projects') ||
          curr.classList.contains('more-projects-section') ||
          curr.classList.contains('belief-section') ||
          curr.classList.contains('faq-section') ||
          curr.classList.contains('contact-section') ||
          curr.classList.contains('about-page-root') ||
          curr.classList.contains('about-page-wrapper') ||
          curr.classList.contains('contact-page-root') ||
          curr.classList.contains('services-page-wrapper') ||
          curr.classList.contains('services-hero') ||
          curr.classList.contains('case-studies-page-wrapper') ||
          curr.classList.contains('legal-page') ||
          curr.id === 'why-us' ||
          curr.id === 'process' ||
          curr.id === 'contact' ||
          curr.id === 'faq' ||
          curr.id === 'projects' ||
          curr.id === 'beliefs' ||
          curr.getAttribute('data-theme') === 'light'
        ) {
          return false;
        }

        // Computed background-color luminescence check
        const style = window.getComputedStyle(curr);
        const bg = style.backgroundColor;
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (match) {
          const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
          if (a > 0.1) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            // #181818, #171717, #0e0e0e lum < 30 (DARK)
            // #f5f5f5, #ffffff, #e7e7e7, #e8e8e8 lum > 220 (LIGHT)
            return lum < 130;
          }
        }
        curr = curr.parentElement;
      }

      // Check document.body background as fallback
      if (document.body) {
        const bodyBg = window.getComputedStyle(document.body).backgroundColor;
        const match = bodyBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (match) {
          const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
          if (a > 0.1) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            return lum < 130;
          }
        }
      }

      return false;
    };

    const checkBackground = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // On mobile & tablet (< 1200px),
      // the fixed header bar is always dark glass, so logo and menu are always pure white.
      if (window.innerWidth < 1200) {
        setIsLogoOverDark(true);
        setIsMenuOverDark(true);
        return;
      }

      const logoEl = logoRef.current;
      const btn = menuBtnRef.current;
      if (!logoEl && !btn) return;

      const lx = logoEl ? logoEl.getBoundingClientRect().left + logoEl.getBoundingClientRect().width / 2 : 50;
      const ly = logoEl ? logoEl.getBoundingClientRect().top + logoEl.getBoundingClientRect().height / 2 : 45;

      const mx = btn ? btn.getBoundingClientRect().left + btn.getBoundingClientRect().width / 2 : window.innerWidth / 2;
      const my = btn ? btn.getBoundingClientRect().top + btn.getBoundingClientRect().height / 2 : 45;

      const logoDark = isPointDark(lx, ly);
      const menuDark = isPointDark(mx, my);

      setIsLogoOverDark(logoDark);
      setIsMenuOverDark(menuDark);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkBackground();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    checkBackground();
    const frameId = window.requestAnimationFrame(checkBackground);
    const timerId = window.setTimeout(checkBackground, 80);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timerId);
    };
  }, [currentRoute, isDrawerOpen]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    e.currentTarget?.blur();

    // 1. Close nav drawer if open
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }

    // 2. Dispatch hero activation event for in-place or arrival animations
    window.dispatchEvent(new CustomEvent('vamix:hero-activate'));

    // 3. Smooth glide to Hero section
    const activeLenis = lenis || window.__vamixLenis;
    const heroEl = document.getElementById('hero');

    if (currentRoute === 'home') {
      if (activeLenis) {
        activeLenis.scrollTo(heroEl || 0, {
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (navigate) {
        navigate('/');
      }
      setTimeout(() => {
        const freshLenis = lenis || window.__vamixLenis;
        const freshHero = document.getElementById('hero');
        if (freshLenis) {
          freshLenis.scrollTo(freshHero || 0, {
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.dispatchEvent(new CustomEvent('vamix:hero-activate'));
      }, 60);
    }
  };

  const isHomeHero = currentRoute === 'home' && !isScrolled;

  return (
    <header 
      ref={headerRef}
      className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${isHomeHero ? 'is-home-hero' : isMenuOverDark ? 'theme-light-text is-over-dark' : 'theme-dark-text is-over-light'} ${isDrawerOpen ? 'menu-is-open' : ''}`}
      role="banner"
    >
      <div className="header-inner-grid">
        {/* Column 1: VAMIX Logo with independent contrast detection */}
        <div className="header-col-logo">
          <a 
            ref={logoRef}
            href="/" 
            onClick={handleLogoClick} 
            className={`brand-logo-link ${isLogoOverDark ? 'is-over-dark' : 'is-over-light'}`} 
            aria-label="VAMIX Home"
          >
            <VamixLogo />
          </a>
        </div>

        {/* Semantic crawler navigation for search engines and accessibility */}
        <nav className="sr-only" aria-label="Main Navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Column 3: + MENU Button with independent contrast detection */}
        <div className="header-col-menu">
          <button 
            ref={menuBtnRef}
            className={`menu-toggle-btn ${isDrawerOpen ? 'is-active' : ''} ${isMenuOverDark ? 'is-over-dark' : 'is-over-light'}`} 
            onClick={(e) => {
              setIsDrawerOpen(!isDrawerOpen);
              e.currentTarget?.blur();
            }}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isDrawerOpen}
          >
            <span className="menu-btn-icon" aria-hidden="true">
              <span className="bar-h" />
              <span className="bar-v" />
            </span>
            <span className="menu-btn-text">
              <RollingText text="MENU" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
