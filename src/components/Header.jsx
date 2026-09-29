import React, { useState, useEffect, useRef } from 'react';
import RollingText from './RollingText';
import VamixLogo from './VamixLogo';

export default function Header({ isDrawerOpen, setIsDrawerOpen, currentRoute, navigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoOverDark, setIsLogoOverDark] = useState(false);
  const [isMenuOverDark, setIsMenuOverDark] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const isElementDark = (targetEl) => {
      if (!targetEl) return false;
      let curr = targetEl;
      while (curr && curr !== document.body && curr !== document.documentElement) {
        // Fast checks for explicit dark sections or elements
        if (
          curr.classList.contains('company-section') ||
          curr.classList.contains('section-dark') ||
          curr.classList.contains('hero-dark-theme') ||
          curr.classList.contains('services-block') ||
          curr.classList.contains('case-section__quote') ||
          curr.classList.contains('contact-cta') ||
          curr.classList.contains('footer-bottom-black') ||
          curr.id === 'approach' ||
          curr.id === 'services' ||
          curr.id === 'contact' ||
          curr.getAttribute('data-theme') === 'dark'
        ) {
          return true;
        }

        // Fast checks for explicit light sections or elements
        if (
          curr.classList.contains('advantages-section') ||
          curr.classList.contains('process-section') ||
          curr.classList.contains('case-section__copy') ||
          curr.classList.contains('case-section__mask') ||
          curr.classList.contains('more-projects-section') ||
          curr.classList.contains('about-page-root') ||
          curr.classList.contains('contact-page-root') ||
          curr.id === 'why-us' ||
          curr.id === 'process' ||
          curr.getAttribute('data-theme') === 'light'
        ) {
          return false;
        }

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
            return lum < 130;
          }
        }
        curr = curr.parentElement;
      }
      return false;
    };

    const checkBackground = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // On home page hero: left rail is dark (#151515), right column is light (#e8e8e8)
      if (currentRoute === 'home' && scrollY < 400) {
        setIsLogoOverDark(true);
        setIsMenuOverDark(false);
        return;
      }

      // Dedicated light pages at top
      if ((currentRoute === 'contact' || currentRoute === 'about' || currentRoute === 'case-studies') && scrollY < 400) {
        setIsLogoOverDark(false);
        setIsMenuOverDark(false);
        return;
      }

      const logoEl = logoRef.current;
      const btn = menuBtnRef.current;
      if (!logoEl && !btn) return;

      const lx = logoEl ? logoEl.getBoundingClientRect().left + logoEl.getBoundingClientRect().width / 2 : 50;
      const ly = logoEl ? logoEl.getBoundingClientRect().top + logoEl.getBoundingClientRect().height / 2 : 45;

      const mx = btn ? btn.getBoundingClientRect().left + btn.getBoundingClientRect().width / 2 : window.innerWidth / 2;
      const my = btn ? btn.getBoundingClientRect().top + btn.getBoundingClientRect().height / 2 : 45;

      // Temporarily hide site-header so elementFromPoint samples the content underneath
      const headerEl = headerRef.current;
      const prevVisibility = headerEl ? headerEl.style.visibility : '';
      if (headerEl) headerEl.style.visibility = 'hidden';

      const targetLogoEl = document.elementFromPoint(lx, ly);
      const targetMenuEl = document.elementFromPoint(mx, my);

      if (headerEl) headerEl.style.visibility = prevVisibility;

      const logoDark = isElementDark(targetLogoEl);
      const menuDark = isElementDark(targetMenuEl);

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

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [currentRoute]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate('/');
    } else {
      window.location.href = '/';
    }
  };

  const handleConsultClick = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate('/contact');
    } else {
      window.location.href = '/contact';
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

        {/* Column 3: + MENU Button with independent contrast detection */}
        <div className="header-col-menu">
          <button 
            ref={menuBtnRef}
            className={`menu-toggle-btn ${isDrawerOpen ? 'is-active' : ''} ${isMenuOverDark ? 'is-over-dark' : 'is-over-light'}`} 
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
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

          {/* Column 4 (Far Right Side): Quick Consult Slot */}
          {!isScrolled && (
            <div className="header-col-actions">
              <a 
                href="/contact" 
                className="consult-slot"
                onClick={handleConsultClick}
                aria-label="Free 30-minute design consultation"
              >
                <p className="consult-slot__copy">
                  <span>FREE 30-MIN DESIGN CONSULT.<br />NO PITCH. </span>JUST CLARITY.
                </p>
                <span className="consult-slot__mark">
                  <span className="consult-slot__avatar-frame">
                    <img 
                      src="/images/ruby-avatar.webp" 
                      alt="Ruby Rattey" 
                      className="consult-slot__avatar" 
                    />
                  </span>
                  <span className="consult-slot__disc" aria-hidden="true">
                    <svg className="consult-slot__plus" width="26" height="26" viewBox="-1 -1 26 26" fill="none">
                      <path d="M12.2792 0L12.2792 24M24 12.2792L0 12.2792" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          )}
        </div>
      </header>
  );
}
