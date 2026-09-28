import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RollingText from './RollingText';
import VamixLogo from './VamixLogo';

export default function NavDrawer({ isOpen, onClose, currentRoute, navigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
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
                                 (link.href === '/contact' && currentRoute === 'contact') || 
                                 (link.href === '/case-studies' && currentRoute === 'case-studies') ||
                                 (link.href === '/' && currentRoute === 'home');
                return (
                  <a 
                    key={link.title}
                    href={link.href} 
                    className={`nav-card-link ${isActive ? 'is-active' : ''}`} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <RollingText text={link.title} />
                  </a>
                );
              })}
            </nav>

            {/* Direct Contact & Studio Email */}
            <div className="nav-card-contact">
              <a href="mailto:hi@vamix.com" className="nav-card-email">
                HI@VAMIX.COM
              </a>
            </div>

            {/* Social Footnote with 1px underline */}
            <div className="nav-card-socials">
              <a href="https://linkedin.com/company/vamix" target="_blank" rel="noopener noreferrer" className="nav-card-social-link">LI</a>
              <a href="https://instagram.com/vamix" target="_blank" rel="noopener noreferrer" className="nav-card-social-link">IG</a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
