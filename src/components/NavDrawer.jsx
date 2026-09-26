import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RollingText from './RollingText';

export default function NavDrawer({ isOpen, onClose, navigate, currentPath }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { title: "HOME", href: "./", path: "/" },
    { title: "ABOUT", href: "./about", path: "/#approach" },
    { title: "CASE STUDIES", href: "./case-studies", path: "/#projects" },
    { title: "INSIGHTS", href: "./blog", path: "/#insights" },
    { title: "CAREERS", href: "./careers", path: "/#team" },
    { title: "CONTACT", href: "./contact", path: "/contact" }
  ];

  const handleLinkClick = (e, link) => {
    if (link.path === '/' || link.path === '/contact') {
      if (navigate) {
        e.preventDefault();
        navigate(link.path);
        onClose();
        return;
      }
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="nav-drawer open" 
          role="dialog" 
          aria-modal="true" 
          aria-label="Main Navigation"
          initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <nav className="nav-drawer-links">
            {links.map((link, idx) => (
              <motion.a 
                key={link.title}
                href={link.href} 
                className={`nav-drawer-link ${(link.path === currentPath) ? 'is-active' : ''}`} 
                onClick={(e) => handleLinkClick(e, link)}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <RollingText text={link.title} />
              </motion.a>
            ))}
          </nav>

          <motion.div 
            className="nav-drawer-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <span>NEW DELHI, INDIA</span>
            <span>TENNESSEE, USA</span>
            <span>HI@WEBUS.IN</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
