import React, { useState, useEffect, useRef } from 'react';
import RollingText from './RollingText';
import VamixLogo from './VamixLogo';

export default function Header({ isDrawerOpen, setIsDrawerOpen, currentRoute, navigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const headerRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const checkBackground = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // On home page hero right column (where menu button sits at col 3), it's light (#e8e8e8)
      if (currentRoute === 'home' && scrollY < 400) {
        setIsOverDark(false);
        return;
      }

      const btn = menuBtnRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Temporarily hide site-header so elementFromPoint samples the content underneath
      const headerEl = headerRef.current;
      const prevDisplay = headerEl ? headerEl.style.display : '';
      if (headerEl) headerEl.style.display = 'none';
      const targetEl = document.elementFromPoint(x, y);
      if (headerEl) headerEl.style.display = prevDisplay;

      if (!targetEl) return;

      let isDark = false;
      let curr = targetEl;
      while (curr && curr !== document.body && curr !== document.documentElement) {
        // Fast class / id checks for known dark sections
        if (
          curr.classList.contains('company-section') ||
          curr.classList.contains('section-dark') ||
          curr.classList.contains('hero-dark-theme') ||
          curr.classList.contains('services-block') ||
          curr.classList.contains('contact-section') ||
          curr.classList.contains('case-section__quote') ||
          curr.id === 'approach' ||
          curr.id === 'services' ||
          curr.id === 'contact' ||
          curr.getAttribute('data-theme') === 'dark'
        ) {
          isDark = true;
          break;
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
            isDark = lum < 130;
            break;
          }
        }
        curr = curr.parentElement;
      }

      setIsOverDark(isDark);
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
      className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${isHomeHero ? 'is-home-hero' : isOverDark ? 'theme-light-text is-over-dark' : 'theme-dark-text is-over-light'} ${isDrawerOpen ? 'menu-is-open' : ''}`}
      role="banner"
    >
      <div className="header-inner-grid">
        {/* Column 1: VAMIX Logo */}
        <div className="header-col-logo">
          <a href="/" onClick={handleLogoClick} className="brand-logo-link" aria-label="VAMIX Home">
            <VamixLogo />
          </a>
        </div>

        {/* Column 3: + MENU Button (Positioned at 50% midpoint / Column 3 matching webus.in) */}
        <div className="header-col-menu">
          <button 
            ref={menuBtnRef}
            className={`menu-toggle-btn ${isDrawerOpen ? 'is-active' : ''} ${isOverDark ? 'is-over-dark' : 'is-over-light'}`} 
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

          {/* Column 4 (Far Right Side): Quick Consult Banner */}
          {!isScrolled && <div className="header-col-actions">
            <a 
              href="/contact" 
              className="consult-banner"
              onClick={handleConsultClick}
              aria-label="Free 30-minute design consultation"
            >
              <div className="consult-text">
                <span className="muted line-1">FREE 30-MIN DESIGN CONSULT.</span>
                <span className="line-2">
                  <span className="muted">NO PITCH.&nbsp;</span>
                  <span className="highlight">JUST CLARITY.</span>
                </span>
              </div>
              
              <div className="consult-combo-btn">
                <div className="consult-avatar-wrap">
                  <img 
                    src="https://framerusercontent.com/images/awFufuyIlbDdk2me7dySF9Y3r8.png?width=2048&height=2048" 
                    alt="Ruby Rattey" 
                    className="consult-avatar-img" 
                  />
                </div>
                <div className="consult-plus-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </a>
          </div>}
        </div>
      </header>
  );
}
