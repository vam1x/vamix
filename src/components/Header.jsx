import React, { useState, useEffect, useRef } from 'react';
import RollingText from './RollingText';
import VamixLogo from './VamixLogo';

export default function Header({ isDrawerOpen, setIsDrawerOpen, currentRoute, navigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // On home page top hero, background is split
      if (currentRoute === 'home' && scrollY < 500) {
        setIsDarkSection(false);
        return;
      }

      const headerEl = headerRef.current;
      if (!headerEl) return;

      const headerRect = headerEl.getBoundingClientRect();
      const midY = headerRect.top + headerRect.height / 2;
      const darkSections = document.querySelectorAll('.section-dark, .hero-dark-theme, [data-theme="dark"]');

      let overDark = false;
      darkSections.forEach(sec => {
        const secRect = sec.getBoundingClientRect();
        if (midY >= secRect.top && midY <= secRect.bottom) {
          overDark = true;
        }
      });

      setIsDarkSection(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
  const isLightText = isDarkSection && !isScrolled;

  return (
    <header 
      ref={headerRef}
        className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${isHomeHero ? 'is-home-hero' : isLightText ? 'theme-light-text' : 'theme-dark-text'} ${isDrawerOpen ? 'menu-is-open' : ''}`}
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
              className={`menu-toggle-btn ${isDrawerOpen ? 'is-active' : ''}`} 
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
