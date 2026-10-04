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
    if (href === '/' || href === '/about' || href === '/services' || href === '/contact' || href === '/case-studies') {
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
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />

          {/* Floating Dropdown Navigation Card (Positioned under Column 3) */}
          <motion.div
            ref={dialogRef}
            className="nav-drawer-card"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card Brand Logo */}
            <div className="nav-card-header">
              <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="nav-card-logo-link" aria-label="VAMIX Home">
                <VamixLogo />
              </a>
            </div>

            {/* Navigation Links with downward split-flap mechanical roll */}
            <nav className="nav-card-links" aria-label="Main Navigation">
              {links.map((link) => {
                const isActive = (link.href === '/about' && currentRoute === 'about') ||
                                 (link.href === '/services' && currentRoute === 'services') ||
                                 (link.href === '/contact' && currentRoute === 'contact') ||
                                 (link.href === '/case-studies' && currentRoute === 'case-studies') ||
                                 (link.href === '/' && currentRoute === 'home');
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    className={`nav-card-link ${isActive ? 'is-active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <RollingText text={link.title} />
                  </a>
                );
              })}
            </nav>

            {/* Direct Contact & Studio Email */}
            <div className="nav-card-contact">
              <a href="mailto:vamixlabs@gmail.com" className="nav-card-email">
                VAMIXLABS@GMAIL.COM
              </a>
            </div>

            {/* Social Footnote with 1px underline */}
            <div className="nav-card-socials" role="list" aria-label="Social media links">
              <a href="https://www.linkedin.com/company/vamix" target="_blank" rel="noopener noreferrer" className="nav-card-social-link" role="listitem">LI</a>
              <a href="https://www.instagram.com/vamix" target="_blank" rel="noopener noreferrer" className="nav-card-social-link" role="listitem">IG</a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}