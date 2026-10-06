import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RollingText from './RollingText';
import VamixLogo from './VamixLogo';

export default function NavDrawer({ isOpen, onClose, currentRoute, navigate }) {
  const dialogRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      previousActiveElement.current = document.activeElement;
      // Trap focus within the dialog
      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements?.length) {
        focusableElements[0].focus();
      }
    } else if (previousActiveElement.current) {
      // Restore focus to the trigger element
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      // Trap focus within dialog
      if (e.key === 'Tab' && isOpen && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const links = [
    { title: "HOME", href: "/" },
    { title: "ABOUT", href: "/about" },
    { title: "SERVICES", href: "/services" },
    { title: "CASE STUDIES", href: "/case-studies" },
    { title: "CONTACT", href: "/contact" }
  ];

  const handleLinkClick = (e, href) => {
    if (href === '/') {
      e.preventDefault();
      onClose();
      window.dispatchEvent(new CustomEvent('vamix:hero-activate'));
      const activeLenis = window.__vamixLenis;
      if (currentRoute === 'home') {
        const heroEl = document.getElementById('hero');
        if (activeLenis) {
          activeLenis.scrollTo(heroEl || 0, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        if (navigate) navigate('/');
        setTimeout(() => {
          const freshLenis = window.__vamixLenis;
          const freshHero = document.getElementById('hero');
          if (freshLenis) {
            freshLenis.scrollTo(freshHero || 0, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          window.dispatchEvent(new CustomEvent('vamix:hero-activate'));
        }, 60);
      }
      return;
    }
    if (href === '/about' || href === '/services' || href === '/contact' || href === '/case-studies') {
      e.preventDefault();
      if (navigate) {
        navigate(href);
      }
      onClose();
    } else if (href.startsWith('/#')) {
      e.preventDefault();
      if (navigate) {
        navigate('/');
        setTimeout(() => {
          const id = href.replace('/#', '');
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      onClose();
    } else {
      onClose();
    }
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 809;
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1200;

  const cardVariants = {
    initial: (desktop) => ({
      opacity: 0,
      y: desktop ? -56 : -18,
      rotateX: desktop ? -18 : 0,
      scale: desktop ? 0.95 : 0.98,
    }),
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: isDesktop ? 0.42 : 0.28,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: isDesktop ? 0.04 : 0,
        delayChildren: isDesktop ? 0.05 : 0
      }
    },
    exit: (desktop) => ({
      opacity: 0,
      y: desktop ? -36 : -14,
      rotateX: desktop ? -12 : 0,
      scale: desktop ? 0.96 : 0.98,
      transition: {
        duration: isDesktop ? 0.28 : 0.22,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const itemVariants = {
    initial: { opacity: 0, y: isDesktop ? -8 : 0 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Subtle click-outside backdrop overlay */}
          <motion.div
            className="nav-drawer-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden="true"
          />

          {/* 3D Perspective Shell matching webus.in exactly */}
          <div className="menu-shell-container" aria-hidden={!isOpen}>
            <button 
              className="menu-filler" 
              type="button" 
              aria-label="Close menu" 
              onClick={onClose}
              tabIndex={-1}
            />

            {/* 3D Folding Navigation Panel with signature 3D cubic-bezier animation */}
            <motion.div
              ref={dialogRef}
              className="nav-drawer-card"
              role="dialog"
              aria-modal="true"
              aria-label="Site Navigation"
              custom={isDesktop}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'top center',
                willChange: 'transform, opacity'
              }}
            >
              {/* Card Brand Logo */}
              <motion.div className="nav-card-header" variants={itemVariants}>
                <a 
                  href="/" 
                  onClick={(e) => handleLinkClick(e, '/')} 
                  className="nav-card-logo-link" 
                  aria-label="VAMIX Home"
                >
                  <VamixLogo />
                </a>
              </motion.div>

              {/* Navigation Links with downward split-flap mechanical roll */}
              <nav className="nav-card-links" aria-label="Main Navigation">
                {links.map((link) => {
                  const isActive = (link.href === '/about' && currentRoute === 'about') ||
                                   (link.href === '/services' && currentRoute === 'services') ||
                                   (link.href === '/contact' && currentRoute === 'contact') ||
                                   (link.href === '/case-studies' && currentRoute === 'case-studies') ||
                                   (link.href === '/' && currentRoute === 'home');
                  return (
                    <motion.div key={link.title} variants={itemVariants}>
                      <a
                        href={link.href}
                        className={`nav-card-link ${isActive ? 'is-active' : ''}`}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <RollingText text={link.title} />
                      </a>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Direct Contact & Studio Email */}
              <motion.div className="nav-card-contact" variants={itemVariants}>
                <a href="mailto:vamixlabs@gmail.com" className="nav-card-email">
                  VAMIXLABS@GMAIL.COM
                </a>
                <a href="tel:+916359198825" className="nav-card-phone">
                  +91 63591 98825
                </a>
              </motion.div>

              {/* Social Footnote with 1px underline */}
              <motion.div className="nav-card-socials" role="list" aria-label="Social media links" variants={itemVariants}>
                <a href="https://www.linkedin.com/company/vamix" target="_blank" rel="noopener noreferrer" className="nav-card-social-link" role="listitem">LI</a>
                <a href="https://www.instagram.com/vamix" target="_blank" rel="noopener noreferrer" className="nav-card-social-link" role="listitem">IG</a>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}